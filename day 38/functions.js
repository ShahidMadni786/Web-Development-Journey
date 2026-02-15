// function MyName(name= " Shahid Madni", lastName= name.toLowerCase()){
//     console.log(" My Name is :", name,lastName);
    
// }
// MyName("Shahid", "Madni");

// let arr = [1,2,6]
// function MyName(name =arr ,lastName ){
//     console.log(" My Name is :", name,lastName);
    
// }
// MyName();

// function MyName(name = {Name : " madni", RollNo: " 115"} ,lastName ){
//     console.log(" My Name is :", name,lastName);
    
// }
// MyName();

function Dog(voice){
    voice = " bow , bow , bow ";
    return voice;
}

function MyName(name = Dog() ,lastName ){
    console.log(" My Name is :", name,lastName);
    
}
MyName();