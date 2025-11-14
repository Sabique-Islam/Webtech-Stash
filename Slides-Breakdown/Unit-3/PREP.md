 # Single way data flow  
 
 ○ A set of immutable values are passed to the components renderer as properties in its HTML tags. The component cannot directly modify any properties but can pass a call back function with the help of which we can do modifications.  
 
 ○ This complete process is known as “properties flow down; actions flow up”.  

 # Virtual DOM  
 
 ○ Creates an in-memory data structure cache which computes the changes made and then updates the browser.  
 
 ○ Allows a special feature that enables the programmer to code as if the whole page is rendered on each change whereas react library only renders components that actually change  