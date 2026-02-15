let buttons  =document.querySelectorAll('button');
let input = document.querySelector('#input');

let str = "";
buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
       if (e.target.textContent === "=") {
            str = eval(str);
            input.value = str;
       }
       else if(e.target.textContent ==='AC'){
           str ="";
           input.value = str;
       }
       else if(e.target.textContent ==='DEL'){
            str = str.substring(0,str.length-1);
            input.value =str;
       }
       else{
       str += e.target.textContent;
       input.value =str;
    }
    })
})