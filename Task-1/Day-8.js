
/*5)*/setTimeout(() => {
    console.log("React is the bestesttt");
}, 5000);  //prints the statement after 5 seconds




/*6)*/let a=setInterval(()=>{
    console.log("React is  the best");
},3000);//prints the statement every 3 seconds



/*7*/let b=setInterval(()=>{
    console.log("React is theeeeee best");
},1000);

setTimeout(()=>{clearInterval(b)},11000);//prints react for 10 times
//with the delay of 1sec each,and then stops.
/*OR*/



for(let i=0;i<10;i++){
    console.log("React is theeeeee best");
}

