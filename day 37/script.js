//Caluclating the factorial using for loop
// let num = 7;
// let temp = 1;
// for(let i=1; i<num; i++){
//     temp=temp*i;
 
    
// }

// console.log(temp);

// calculatig the factorial using the reduce method of Array;

let arr = [1,2,3,4,5,6];  // factorial of 6
let ans = arr.reduce((acc, curr)=>{
   return acc*curr;
});
console.log(ans);
