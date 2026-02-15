let answer = document.querySelectorAll('.ans');
let ques = document.querySelectorAll('.questions');
let plus = document.querySelectorAll(".questions i")
ques.forEach((ques, index)=>{
    ques.addEventListener("click", ()=>{
        answer.forEach((ans, ansIndex)=>{
            if(index!=ansIndex){
                ans.classList.remove("ans-click");
                plus[ansIndex].style.transform = "rotate(0deg)"
            }
        });
       answer[index].classList.toggle("ans-click");
        if(answer[index].classList.contains("ans-click")){
            plus[index].style.transform = "rotate(45deg)";
        }
        else{
            plus[index].style.transform = "rotate(0deg)";
        }
       
    });
  
});