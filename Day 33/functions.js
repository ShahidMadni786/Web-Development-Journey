// function add(a, b) {
//     return a + b;
//  }
//  let result =  add(5, 4);
//  console.log(result)
//  // This will return 9
//  function mean(a,b,c,d,e){
//   let average = (a+b+c+d+e)/5;
//    console.log(average);
   
//  }
//  mean(2,5,6,4,10);

//  let a ;
// a= prompt();
 
//  if(a==5){
//     console.log("you enteret the correct number");
    
//  }
//  else{
//     console.log("try again");
    
//  }


//  function printNum(num){
//     num =  prompt();
//     console.log("you entered the number : " + num)
//  }
//  printNum(5)

// let divide = (x,y) => {
//     x=prompt("Entered the first number");
//     y=prompt("enter the second number");
//     return x/y;
// }
// console.log("The answer is : "+divide(8,2));

let signUp = (firstName, lastName, cnic, phoneNo, address, uni) => {
    firstName = prompt("Your First Name:");
    lastName = prompt("Your Last Name:");
    cnic = prompt("Your CNIC:");
    phoneNo = prompt("Your Phone No:");
    address = prompt("Your Address:");
    uni = prompt("Your University:");
    console.log("First Name: " + firstName + "\nLast Name: " + lastName + "\nCNIC: " + cnic + "\nPhone No: " + phoneNo + "\nAddress: " + address + "\nUniversity: " + uni);
}
signUp();
