let inp = document.getElementById("input-text");
let btn = document.getElementById("btn");
let task = document.querySelector(".add-task")

btn.addEventListener("click", ()=>{
    let newTaskText = inp.value.trim(); 
    let isDuplicate = false;
    let existingTasks = task.querySelectorAll("p");

    existingTasks.forEach((existingTask) => {
        if (existingTask.textContent === newTaskText) {
            isDuplicate = true;
        }
    });

    if (isDuplicate || newTaskText === "") {
        alert("Task already exists or input is empty!");
        return;
    }

    let container = document.createElement("div");
    let container2 = document.createElement("div");
    let container3 = document.createElement("div");
    let check = document.createElement("input");
    check.type =  "checkbox";
    check.class = "customCheckbox";
  
    container.style.cssText = "display: flex; justify-content: space-between;";
    container2.style.cssText = "display: flex; gap: 1rem;";
    container3.style.cssText = "display: flex; gap: 1rem; align-items : center;";
    task.prepend(container);
    let para = document.createElement("p");
   para.textContent = inp.value;
   container.prepend(container3); 
   container.append(container2);
   container3.append(para);
   container3.prepend(check);
   let btn1 = document.createElement("button");
   btn1.innerText = "Delete"; 
   container2.append(btn1);
   btn1.addEventListener("click", ()=>{
 container.remove();
   })
   let btn2 = document.createElement("button");
   btn2.innerText = "Edit";
   container2.prepend(btn2);
   btn2.addEventListener("click",()=>{
    if(para.contentEditable=== "true"){
        para.contentEditable = "false";
        btn2.innerText = "Edit";
    }
    else{
        para.contentEditable = "true";
        para.focus();
        btn2.innerText = "Save Changes";
    }
   });

})