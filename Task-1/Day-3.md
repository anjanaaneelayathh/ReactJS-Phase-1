
<font color="cyan">**7)What is Promise?How do you create a Promise?Explain with an example.**</font><br>
**=>**<br>
<li>Promises provide a simpler alternative for executing, composing, and managing asynchronous operations when compared to traditional callback-based approaches. <br>
<li>They also allow you to handle asynchronous errors using approaches that are similar to synchronous try/catch .
<li>The constructor syntax for a promise object is:

<ol>let promise = new Promise(function(resolve, reject) {<br>
  // executor <br>
});</ol>

<li>The function passed to new Promise is called the executor. When the promise is created, this executor function runs automatically. It contains the producing code, that should eventually produce a result.
<li>The resulting promise object has internal properties:

<ol>state — initially “pending”, then changes to either “fulfilled” or “rejected”,<br>
result — an arbitrary value, initially undefined.</ol>
<li>A Promise object serves as a link between the executor (the “producing code” ) and the consuming functions , which will receive the result or error. Consuming functions can be registered (subscribed) using methods .then, .catch and .finally.

<li>EXAMPLE:
<ol>

a=new Promise((resolve,reject)=>{              //two functions as parameters<br>
     resolve(data);    // in case data fetches successfully<br>
     reject(error);      //in case data is not fetched,any one is executed not both.<br>
}<br>


let a=new Promise((resolve,reject)=>{<br>
        reject("hi");<br>
    });<br>
a.then((value)=>{           //either then or catch will be called,then for successes and for failures<br>
                           
    console.log(value);<br>
})<br>
.catch((value)=>{<br>
    console.log(value);<br>

});<br>

//






