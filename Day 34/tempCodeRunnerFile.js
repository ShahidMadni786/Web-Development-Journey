
let arr = [20,30,40,50,60,70]
let len = arr.length;
console.log(len);

 let getAddition = (arr)=>{
    let len = arr.length;
    let prod = 1;
    for (let i=0; i<len; i++){
        prod = prod*arr[i];
  }
   console.log(prod);
   
 }
 getAddition(arr);