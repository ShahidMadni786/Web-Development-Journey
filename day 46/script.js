function getData(dataId,geNextData){
    setTimeout(()=>{
        console.log("your data is: ", dataId);
        if (geNextData) {
            geNextData();
            
           }
    },2000);
   
   
}

//Nested Callbacks


getData(1,()=>{
    getData(2, ()=>{
        getData(3);
    }
    )
});