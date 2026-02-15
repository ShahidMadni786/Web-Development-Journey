let arr = [5,2 ,10, 20 ,40 ,25,35,100];
let ans = arr.filter((num)=>{
    if(num % 10==0){
        return true
        
    }
    else {
        return false
    }
})

console.log(ans);
