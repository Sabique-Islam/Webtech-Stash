"""Example code demonstrating the five constructs:
- if-elif-else ladder
- while loop
- functions
- class definition
- object creation
"""

class Counter:
    def __init__(self, start=0):
        self.value = start

    def inc(self, amount=1):
        self.value += amount

    def __repr__(self):
        return f"Counter({self.value})"


def categorize(n):
    # if-elif-else ladder
    if n < 0:
        return "negative"
    elif n == 0:
        return "zero"
    elif 0 < n <= 10:
        return "small"
    else:
        return "large"


def add(a, b):
    """Simple function demonstrating function definition and return."""
    return a + b


def countdown(n):
    """Demonstrates a while loop."""
    out = []
    while n > 0:
        out.append(n)
        n -= 1
    out.append('blastoff')
    return out


def demo():
    print('--- demo start ---')

    # object creation
    c = Counter(3)
    print('created object:', c)

    # call method
    c.inc(2)
    print('after inc:', c)

    # function call
    s = add(4, 5)
    print('add(4,5) ->', s)

    # while loop
    print('countdown:', countdown(5))

    # if-elif-else ladder
    for test in [-1, 0, 5, 20]:
        print(f'{test} ->', categorize(test))

    print('--- demo end ---')


if __name__ == '__main__':
    demo()
