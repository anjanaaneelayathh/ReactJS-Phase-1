
//this is question 1
let a=[0,1,2,3,4,5,6,7,8,9];
console.log(a[5]);
a.push(10,11,12,13,14,15,16,17,18,19,20);//inserts all the elements in the array
console.log(a);
a.pop();  // removes last entered element
console.log(a);
a.shift(); // removes element from the start of the array
console.log(a);
a.unshift(21);//inserts 21 at the start of the array
console.log(a);
console.log(a.indexOf(17)); //gives index of element 17
a.splice(11,1);//removes the item at index 11
console.log(a);
a.splice(4,5);//removes 5 items  starting from index 4
console.log(a);


let b=[];
for( let i = 0; i < a.length; i++){ //array b created
    b[i]=a[i]*i;
}
console.log(b);



console.log(a.slice(7,11));//elements from 7 to 10 index displayed


let c=[];
for( let i = 0; i < b.length; i++){ 
    if(b[i]>30){
        c.push(b[i]);//array c created
    }
}
console.log(c);



console.log(...a,...b,...c);//this merges array a,b,c









        
    


