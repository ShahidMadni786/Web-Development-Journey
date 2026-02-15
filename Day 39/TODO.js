let toDo = [];
let request = prompt("Enter your choice :\n 1. Add\n 2. Remove\n 3. List\n 4. quite");

while(request!='4'){
    if(request=='1'){
        let add = prompt("Enter what you want to Add");
        toDo.push(add);
        
    }
    else if(request=='2'){
        let index = prompt("Enter the index of the item you want delete");
        toDo.splice(index,1);
    }
    else if(request=='3'){
        for(let i = 0; i<toDo.length; i++){
            console.log(i,toDo[i]);
        }
    }
    else{
        console.log("you entered the wrong input");
        
    }
    request = prompt("Enter your choice :\n 1. Add\n 2. Remove\n 3. List\n 4. quite");
    
}
