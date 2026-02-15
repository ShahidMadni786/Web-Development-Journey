let rand = Math.random();
let First, Second, Third;

if(rand<0.33){
   First="Amazing"
}
 else if(rand<0.66 && rand>=0.33){
  First = "Crazy"
}
else{
  First = "Jhakas"
}

rand = Math.random();
if(rand<0.33){
   Third="bros"
}
else if(rand<0.66 && rand>=0.33){
   Third = "Limitid"
}
else{
  Third = "Hub"
}

Second = prompt();

console.log(First+ " " + Second+ " "+ Third);