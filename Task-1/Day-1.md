<font color="cyan">**1)Explain the rendering of websites in the browser using a complete block diagram.Every block diagram should be explained in your own words.List down all the names of the JS engines and their creators.**<br></font>
**=>**


<img src ="https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/webkitflow.png">
Block Diagram<br><br>

<li>Rendering of websites actually means the display of requested contents on the browser screen.<br>
<li>By default the rendering engine can display HTML and XML documents and images.The rendering engine will start getting the contents of the requested document from the networking layer. This will usually be done in 8kB chunks.
<li>The JS engine will start parsing the HTML and style sheets(CSS),and for this each of them have their separate parsers.A parser is a compiler or interpreter component that breaks data into smaller elements for easy translation into another language.
<li>The parser converts the HTML documents into DOM tree.DOM is short for Document Object Model. It is a tree format of all the HTML elements.This behaves as an interface between the HTML documents and javascript.The engine also parses the style sheets.
<li>The parsed data of both hTML and CSS are then attached together and coverted to render tree.This tree is the visual representation of the document in the order it has to be displayed.
<li>It then undergoes Layout process in which the exact locations of the elements is been provided.
<li>Then comes the painting stage in which each node of the render tree is painted using UI of backend layer.After all this process only it turns capable of being displayed.
<li>Following is the list of all JS engines and their creator:
<ol>
<table cellpading="2" color="grey" border="2">
<tr>
    <th>JS engines</th>
    <th>Creator</th> 
    <th>Used in</th>
  </tr>
  <tr>
    <td>V8 </td>
    <td> Lars Bak</td> 
    <td>Google Chrome,V8.NET,Node JS</td>
  </tr>
  <tr>
    <td>JS core</td>
    <td> derived from Harri Porten's project</td>
    <td>Webkit project,Safari</td>
  </tr>
   <tr>
    <td>Chakra core</td>
    <td>Microsoft</td>
    <td>Microsoft Edge</td>
  </tr>



</table>
</ol>


<font color="cyan">**2)What is the difference between interpreted and compiled language?Give examples for each.**<br></font>
**=>**
The difference between an interpreter and a compiler is been mentioned in the following table:<br>

<ol>
<table cellpading="2" color="grey" border="2">
<tr>
 <th>Interpreter</th>
 <th>Compiler</th>
</tr>
<tr>
<td>
 Here the source code is the program itself.
</td>
<td>
The high level language is converted to machine level code( byte code) by a compiler and this is the source code here which isn't human readable.</td>
</tr>
<tr>
<td>The code requires an interpreter each time it is been executed</td>
<td>
The program is processed only once to generate it's compiled code for execution and same can be used for future execution.</td></tr>
<tr>
<td>
Slower than the compiled ones but these codes are easier to debug.</td>
<td>
These are faster than the interpreted ones.</td></tr>
<tr>
<td>Examples : Javascript,Perl,Python.</td>
<td>
Examples :<br> C,C++,Java.</td></tr>



</table>
</ol>

<font color="cyan">**3)What are the different ways of defining a variable? Explain with examples.What is the disadvantage of using "var" keyword?**</font>

**=>**

There are 3 different ways to define a varible in javascript:
<ol>
<li> var :<br>
<ol>
var has global scope.<br>
It's value can be changed throughout the program.<br>
It is preferred not to use this method.<br>
 example :- var a=2;</ol>
<li>let :<br>
<ol>These are not global in nature.<br>
The value of the variable using this keyword can be changed at any point in the program,as javascript uses linewise interpretation.<br>
This is the prefered method.<br>
example :- let a=2;
 
</ol>
<li> const :<br>
<ol>These are global in nature.<br>
The value of the variable cannot be changed once assigned as they are declared constants.<br>
These are declared usually at the intial parts.<br>
example :- const pi=3.14
</ol>
<br>
</ol>
Disadvantage of using a var keyword is that:<br>
<li>No error is thrown if you declare the same variable twice using var (conversely, both let and const will throw an error if a variable is declared twice)
<li>Variables declared with var are not block scoped (although they are function scoped), while with let and const they are. <br><br><br>

<font color="cyan">**4)  What are the different types of Scopes in Javascript? Explain with examples each in detail.**</font>
<br>
**=>**
There are various types of scopes in JavaScript.
<ol>
<li>Global Scope<br>
<ol>All variables are by default Global in scope. This means it is accessible anywhere in the JavaScript code.<br></ol>
<br>Examples:<br><ol>
let a=3;<br>
function FunctionalScope()<br>
{
  <br>console.log(a);// Local Scope<br>
}<br>
console.log(a); //Global Scope<br>
OUTPUT:<br>
3<br>
3</ol>
</li><br>
<li>
Block Scope<br>
<ol>Certain variables which are defined in block cannot be accessed outside block.<br></ol>
<br>Examples:<br><ol>
{<br>
var a=1;<br>
let b=2;<br>
}<br>
console.log(a);<br>
console.log(b);<br>
OUTPUT<br>
1 //unexpected behaviour of var.Hence not recommended.<br> 
error<br></ol>
</li><br>
<li>
Funtional Scope<br>
<ol>Certain variables are restricted to function body where they are declared.<br></ol>
<br>Examples:<br><ol>
{<br>
var a=1;<br>
let b=2;<br>}<br>
console.log(a);<br>
function help()<br>{<br>
let a=3;<br>
let b=4;<br>}<br>
console.log(a);<br>
OUTPUT:<br>
1<br>
1 //accesses global scope a=1</ol>
</li>
</ol>


<font color="cyan">**5.  What are the different types of function? Explain each in detail with example. Explain the working of this in each type.**</font>
<br>**=>**
<br>Function Types:<br>
<ol>
<li>Anonymous function<br><br>
<ol>These functions can be involked using the variable name.They do not need function names.This type of function refers to the object it is called on behalf of.<br></ol>
<br><ol>Syntax:</ol><ol><ol>let a=function(var1,var2,...)<br>
{<br><ol>body</ol>}<br></ol></ol><br>
<ol>Example:<br><br>
<ol>let a=function()<br>
{<br><ol>
let x=1;<br>
let y=2;<br>
console.log(x);<br></ol>
}<br></ol><br>
In this case the 'this' in this case would refer to the object 'a'.We can access element x&y using 'this.x' and 'this.y'.</ol>

<br><br>
<li>
Normal function<br><br>
<ol>These functions use 'function' keyword and also need func_name at declaration<br>
<br>Syntax:<br><br>
<ol>function func_name(var1,var2,...)<br>
{<br><ol>body<br></ol>}</ol>
<br>Example:<br><br>
function help()<br>
{<br><ol>
let x=1;<br>
let y=2;<br>
console.log(x);</ol><br>}<br><br>
The this keyword does not refer to the currently executing function, so must refer to Function objects by name, even within the function body<br><br>
<br></ol>

<li>
Declaration in class/objects<br><ol><br>
These are declared in class or objects. They don't need function keyword for declaration and have to be accessed using class/object instance.<br><br>Syntax:<ol>
<br>name(var1,var2,...)<br>
{<br><ol>body</ol>}</ol>
<br>Example:<br>
<br>hey()<br>
{<br><ol>let x=1;<br>
let y=2;<br>
console.log(x)</ol>}</ol>

<br>
<li>
Arrow Function<br><br>
<ol>An arrow function is a type of anonymous function. Takes 'this' from parent class, hence must not be used in functions with defined values.<br><br>Syntax:<br>
<br><ol>let name:()=> //Object function<br>{<br><ol>body</ol>}
<br>let name=()=> //Class function<br>{<br><ol>body</ol>}</ol>
<br>Example:<br>
<br>let a={<br>
<ol>fname:'Anjana',<br>
lname:'Neelayath',<br>
getName:()=>{<br>
<ol>return `${this.fname}` //Global Scope<br>
return `${a.lname}`</ol><ol>}</ol>
<br>}</ol><br>
OUTPUT:<br>
undefined,Neelayath

</ol>








