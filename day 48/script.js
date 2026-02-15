// function getData(getId, GetNextData){
// return  promise = new Promise((resolve, reject)=>{
//      setTimeout(()=>{
//         console.log(" i am the ming");
//         reject('our created error  ');
    
//      if(GetNextData){
//         GetNextData();
//      }
//     },2000);
// });


// }
// let catcher = getData();
// catcher.catch((err)=>{
//     console.log("error is here",err);
    
// })

// //   let promises = getData();
// //   promises.then(()=>{
// //     console.log(" i am gbetpromise");
    
// //   })

// // we use .then method when the promise is fulfilled or resolved 
// // we use .catch method when the promise is rejected  

// //promise chaining

function async(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
          console.log("data 1");
          resolve("sucessfuly data1 received")
      },3000);
    });
}

function async1(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
          console.log("data 2");
          resolve("sucessfuly data2 received")
      },3000);
    });
}

async function sync(){
    console.log("fetching data 1..");
    
   await async();
   console.log("fetching data2..");
   
   await async1();
}
//promise chain
// console.log("fetching data1.....");
// let d = async();
// d.then((res)=>{
   
//   console.log("Fetching data2....");
//   let d1 = async1();
//   d1.then((res)=>{

    
//   })
// });


// Asynnc await >> Promise chain >> callback hell