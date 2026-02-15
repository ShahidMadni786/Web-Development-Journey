
//use of var keyword
//it is an example of globally scope use of var to create variable
// var a =25;
// function add(){
//     console.log(a);
    
// }
// add();

// example of functional scoped  variable  
// function age(){
//     var a =26;
// }

// console.log(a);
//blocked scoped // SO var is not a block scope variable

// {
//     var a = 28; 
// }
//   console.log(a);

// we can say in modern javascript we dont neccesarily use the var keywords to make variables
// instead  of these we use the let or const keyword 

//use of let keyword
//this sort of example show that let is basically blocked scoped variable 

// {
//     let age = 18;
// }
// console.log(age);

// we cant redeclare the value of a variable using let keyword as that of var

let a =20;
let a=21;
    console.log(a);
    