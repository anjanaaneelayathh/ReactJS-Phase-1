<font color="cyan">**6)What is NodeJS?Explain the event loop with example.**</font><br>
**=>**
<li>
NodeJS is a JavaScript runtime built on Chrome’s V8 JavaScript engine.
<li>It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
<li>So NodeJS basically is a model which consists of Javascript engine and the node API's or modules alone.
<li>It came into existence when the original developers of JavaScript extended it from something you could only run in the browser to something you could run on your machine as a standalone application.<br></li>
<br>
<br>
Event loop:
<ol>
<li>NodeJS is a single-threaded application, but it can support concurrency via the concept of event and callbacks.
<li> Every API of NodeJS is asynchronous(no order for execution) and being single-threaded, they use async function calls to maintain concurrency.
<li> Node uses observer(the function that listens to event) pattern. Node thread keeps an event loop and whenever a task gets completed, it fires the corresponding event which signals the event-listener function to execute.
<li>So it works as shown in the diagram below.
<img src="https://www.tutorialspoint.com/nodejs/images/event_loop.jpg"><br>
example:<br><br>
PROGRAM <br>
console.log("first");<br>
setTimeout(()=>{console.log("second")},0);<br>
console.log("third");<br><br>
OUTPUT<br>
first<br>
third<br>
second<br>//here the setTimeout() is an observer function thus even at 0ms it enters an event loop checks for the delay and the  node fires event on the task completion leading to function execution ,meanwhile the third statement gets executed and thus gets displayed before.
</ol>

<font color="cyan">**7)What is Promise?How do you create a Promise?Explain with an example.**</font><br>
**=>**<br>
<li>Promises provide a simpler alternative for executing, composing, and managing asynchronous operations when compared to traditional callback-based approaches. <br>
<li>They also allow you to handle asynchronous errors using approaches that are similar to synchronous try/catch .


