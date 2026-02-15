let arr = [];


   let AddToArray = ()=>{
let user = prompt("Enter number to add in the array ");
let addToNum = Number(user);
if(!isNaN(addToNum)){
    arr.push(addToNum);
  
  
}
else {
    console.log("enter a valid numbere");
    
}
console.log("the Array with number entered is : " + arr);

}
AddToArray();
AddToArray();
AddToArray();
AddToArray();