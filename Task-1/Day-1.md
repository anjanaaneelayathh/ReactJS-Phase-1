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
    <td></td>
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
Disadvantage of using a var keyword is that<br>


<font color="cyan">**4) What are the different types of scopes in Javascript? Explain with the examples each in detail.**</font>

**=>**
There are three kinds of scopes in Javascript,they are as follows:
<ol>
<li>Global Scope<br>
The.

</ol>






