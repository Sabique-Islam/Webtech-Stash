"""
PYTHON CODE ANALYZER - A tool to analyze Python code structure

This program reads a Python file and finds important programming constructs:
- function definitions (like def my_function():)
- class definitions (like class MyClass:)
- if-elif-else statements (decision-making code)
- while loops (repeating code blocks)
- object creation (creating instances of classes)

Think of this as a "code detective" that searches through your Python file
and tells you where all these important pieces are located!
"""

# Import necessary modules (like borrowing tools from a toolbox)
import ast  # Abstract Syntax Tree - helps us understand code structure
import sys  # System module - helps us read command line arguments
from collections import defaultdict  # Advanced dictionary (not used here, but imported)


# Create our main Analyzer class that will examine the code
# This class inherits from ast.NodeVisitor which gives us special powers to visit each part of code
class Analyzer(ast.NodeVisitor):
    """
    This is our Code Analyzer class - it acts like a detective searching through code.
    
    When we create an Analyzer object, it will keep lists of everything it finds:
    - functions (stored in self.functions)
    - classes (stored in self.classes)
    - while loops (stored in self.while_nodes)
    - if-elif-else chains (stored in self.if_chains)
    - function calls (stored in self.calls)
    """
    
    def __init__(self):
        """
        Initialize (set up) the analyzer when it's first created.
        Think of this as setting up empty buckets to collect different items.
        """
        # Create empty lists to store what we find (like empty baskets to collect items)
        self.functions = []      # Will store function names and their line numbers
        self.classes = []        # Will store class names and their line numbers
        self.while_nodes = []    # Will store line numbers where while loops appear
        self.if_chains = []      # Will store information about if-elif-else statements
        self.calls = []          # Will store all function/method calls found

    def visit_FunctionDef(self, node):
        """
        This method runs AUTOMATICALLY whenever Python finds a function definition.
        
        Example: If the code has "def calculate_sum():", this method will run!
        
        Parameters:
        - node: Contains information about the function (name, line number, etc.)
        """
        # Save the function name and which line it appears on
        # Example: If we find "def hello():" on line 5, we save ("hello", 5)
        self.functions.append((node.name, node.lineno))
        
        # Keep searching inside this function for more constructs
        # (There might be classes, loops, or if-statements inside!)
        self.generic_visit(node)

    def visit_ClassDef(self, node):
        """
        This method runs AUTOMATICALLY whenever Python finds a class definition.
        
        Example: If the code has "class Student:", this method will run!
        
        Parameters:
        - node: Contains information about the class (name, line number, etc.)
        """
        # Save the class name and which line it appears on
        # Example: If we find "class Car:" on line 10, we save ("Car", 10)
        self.classes.append((node.name, node.lineno))
        
        # Keep searching inside this class for more constructs
        # (There might be functions, loops, or if-statements inside the class!)
        self.generic_visit(node)

    def visit_While(self, node):
        """
        This method runs AUTOMATICALLY whenever Python finds a while loop.
        
        Example: If the code has "while x < 10:", this method will run!
        
        Parameters:
        - node: Contains information about the while loop (line number, condition, etc.)
        """
        # Save the line number where this while loop appears
        # Example: If we find "while True:" on line 25, we save 25
        self.while_nodes.append(node.lineno)
        
        # Keep searching inside this while loop for more constructs
        # (There might be if-statements or other loops inside!)
        self.generic_visit(node)

    def visit_If(self, node):
        """
        This method runs AUTOMATICALLY whenever Python finds an if statement.
        
        This is the TRICKIEST part! We need to detect if-elif-else "chains" (ladders).
        
        Example 1: Simple if
            if x > 10:
                print("big")
        
        Example 2: If-elif-else chain (this is what we're looking for!)
            if x > 10:
                print("big")
            elif x > 5:
                print("medium")
            else:
                print("small")
        
        Parameters:
        - node: Contains information about the if statement
        """
        
        # Start counting how many parts are in this if-elif-else chain
        # We start with 1 because we already have the first "if"
        chain_len = 1
        
        # 'current' will help us walk through the chain (like climbing stairs)
        current = node
        
        # This flag tells us if there's a final "else" at the end
        has_else = False
        
        # Keep checking if there are more parts to this if-statement chain
        while True:
            # Check if there's an "else" or "elif" part (called 'orelse' in Python's AST)
            if current.orelse:
                # If there's exactly 1 thing in orelse AND it's another If statement,
                # then it's an "elif" (which Python represents as another If inside orelse)
                if len(current.orelse) == 1 and isinstance(current.orelse[0], ast.If):
                    # We found an elif! Add it to our count
                    chain_len += 1
                    # Move to this elif so we can check if there are MORE elifs after it
                    current = current.orelse[0]
                    # Go back to the top of the while loop to keep checking
                    continue
                else:
                    # If we're here, it means we found a final "else" block
                    # (it's not another If, so it must be the final else)
                    has_else = True
            # If there's no orelse, or we found the final else, we're done!
            break

        # Only save this if-chain if it's interesting (has elif or else)
        # We don't care about simple "if" statements with no elif/else
        if chain_len > 1 or has_else:
            # Save: (line number, how many if/elif parts, whether it has else)
            # Example: (10, 3, True) means line 10 has if-elif-elif-else (3 parts + else)
            self.if_chains.append((node.lineno, chain_len, has_else))

        # Keep searching inside the if-statement body for more constructs
        # (There might be loops or other if-statements inside!)
        self.generic_visit(node)

    def visit_Call(self, node):
        """
        This method runs AUTOMATICALLY whenever Python finds a function/method call.
        
        A "call" is when you use parentheses () to run a function.
        Examples:
            - print("hello")  <- call to print function
            - len(my_list)    <- call to len function
            - Car()           <- call to Car class (creates object)
            - person.walk()   <- call to walk method
        
        Parameters:
        - node: Contains information about the function call
        """
        
        # Try to figure out what function is being called
        func_name = None
        
        # Check if it's a simple function call like: print() or Car()
        if isinstance(node.func, ast.Name):
            # Get the function name (like "print" or "Car")
            func_name = node.func.id
            
        # Check if it's a method call like: person.walk() or list.append()
        elif isinstance(node.func, ast.Attribute):
            # Get the method name (the part after the dot, like "walk" or "append")
            func_name = node.func.attr

        # Save this function call (name and line number)
        # Example: If we find "print('hi')" on line 15, we save ("print", 15)
        self.calls.append((func_name, node.lineno))
        
        # Keep searching inside this call for more constructs
        # (The arguments to the function might have more calls or constructs!)
        self.generic_visit(node)


def analyze_file(path):
    """
    This is the MAIN function that analyzes a Python file.
    
    It does 3 main things:
    1. Read the Python file
    2. Use our Analyzer to find all the constructs
    3. Print a nice report of what was found
    
    Parameters:
    - path: The file path to the Python file we want to analyze
    """
    
    # Step 1: Open and read the entire Python file
    # 'with open' automatically closes the file when done (good practice!)
    with open(path, 'r') as f:
        src = f.read()  # Read all the text from the file into 'src'

    # Step 2: Parse (understand) the code structure
    # ast.parse converts the code text into a tree structure we can analyze
    # Think of it like creating a family tree, but for code!
    tree = ast.parse(src, filename=path)
    
    # Step 3: Create our analyzer (our code detective)
    analyzer = Analyzer()
    
    # Step 4: Tell the analyzer to visit (examine) every part of the code tree
    # This will automatically call visit_FunctionDef, visit_ClassDef, etc.
    analyzer.visit(tree)

    # Step 5: Find object creations (when we create instances of classes)
    # How? If someone calls Car(), and we found a class named Car, that's object creation!
    
    # Create a set of all class names we found (set = collection with no duplicates)
    # Example: If we found "class Car" and "class Bike", class_names = {"Car", "Bike"}
    class_names = {name for name, _ in analyzer.classes}
    
    # Find all calls where the name matches a class name
    # Example: If we found Car() and Car is in class_names, it's object creation!
    object_creations = [(name, ln) for name, ln in analyzer.calls if name in class_names]

    # Step 6: Print a nice report showing everything we found!
    
    print('Analysis of', path)
    print()  # Empty line for better readability
    
    # Print all functions we found
    print('Functions:')
    for name, ln in analyzer.functions:
        # Example output: "  - calculate_sum (line 10)"
        print(f'  - {name} (line {ln})')

    print()  # Empty line for better readability
    
    # Print all classes we found
    print('Classes:')
    for name, ln in analyzer.classes:
        # Example output: "  - Car (line 5)"
        print(f'  - {name} (line {ln})')

    print()  # Empty line for better readability
    
    # Print all if-elif-else chains we found
    print('If / elif / else ladders:')
    for ln, chain_len, has_else in analyzer.if_chains:
        # Example output: "  - at line 20: chain length 3, has else=True"
        # This means: if-elif-elif-else (3 if/elif parts plus an else)
        print(f'  - at line {ln}: chain length {chain_len}, has else={has_else}')

    print()  # Empty line for better readability
    
    # Print all while loops we found
    print('While loops:')
    for ln in analyzer.while_nodes:
        # Example output: "  - while at line 15"
        print(f'  - while at line {ln}')

    print()  # Empty line for better readability
    
    # Print all function calls, and mark which ones are object creations
    print('Calls (potential object creations shown if name matches a class defined here):')
    for name, ln in analyzer.calls:
        # Add a special marker if this call is creating an object
        # Example: If we call Car() and Car is a class, mark it as "(object creation)"
        mark = ' (object creation)' if name in class_names else ''
        # Example output: "  - Car at line 25 (object creation)"
        # or just: "  - print at line 10" (if it's not object creation)
        print(f'  - {name} at line {ln}{mark}')

    # Print a final summary with counts
    print('\nSummary:')
    print('  functions:', len(analyzer.functions))      # How many functions total
    print('  classes:', len(analyzer.classes))          # How many classes total
    print('  if-ladders:', len(analyzer.if_chains))     # How many if-elif-else chains
    print('  while-loops:', len(analyzer.while_nodes))  # How many while loops
    print('  object-creations:', len(object_creations)) # How many objects created


# This special block runs ONLY when you run this file directly
# (Not when you import it as a module in another program)
if __name__ == '__main__':
    """
    Main entry point - this is where the program starts!
    
    How to use this program:
    1. Open terminal/command prompt
    2. Type: python analyzer.py mycode.py
    3. Press Enter
    4. See the analysis results!
    """
    
    # Check if the user provided a file path
    # sys.argv is a list of command-line arguments
    # sys.argv[0] = "analyzer.py" (the script name)
    # sys.argv[1] = the file they want to analyze (hopefully!)
    
    if len(sys.argv) < 2:
        # Oops! User forgot to provide a file name
        # Show them how to use the program correctly
        print('Usage: python analyzer.py <path-to-py-file>')
        print('Example: python analyzer.py mycode.py')
        sys.exit(1)  # Exit with error code 1 (means something went wrong)

    # Great! User provided a file. Let's analyze it!
    # sys.argv[1] is the file path they gave us
    analyze_file(sys.argv[1])
