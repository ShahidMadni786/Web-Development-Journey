// let promise = new Promise((resolve,reject)=>{
//     console.log("This is your promise instead of callback hells");
//   reject("sorry promise is rejeceted");
// });



function getdata(getId , NextId){
       return promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
        //  console.log("your data is", getId);
         reject("error");
         if(NextId){
            NextId();
         }
        },5000);
       });
}