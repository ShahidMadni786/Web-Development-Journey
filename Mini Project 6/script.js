let questions = document.querySelectorAll(".questions");
let nextBtn = document.querySelector("#next");
let answer = document.querySelectorAll(".answers div");
let win = document.querySelector(".win");
let wining = document.querySelector("#winner");
let play = document.querySelector("#play");
let optionsLocked = false;
let count = 0;
let curr = 0;

questions[curr].style.display ='block';
nextBtn.addEventListener("click", ()=>{
     questions[curr].style.display ='none';
     curr++;
   if (curr<questions.length) {
    questions[curr].style.display ='block';
    optionsLocked = false;
    unlockOptions(questions[curr]);
   }
   else{
    nextBtn.style.display ="none";
    win.style.display = "block";
    winner()
   }
});
function winner(){
    wining.textContent = "You scored " + count +" "+ "out of 7."; 
}
document.querySelectorAll(".answers").forEach((answerContainer) => {
    answerContainer.addEventListener("click", (e) => {
        const clickedDiv = e.target.closest('div');

        if (clickedDiv && !optionsLocked) {
            // Lock options
            optionsLocked = true;

            // Check if the clicked div has the correct class
            if (clickedDiv.classList.contains("correct")) {
                count++;
                clickedDiv.style.backgroundColor = "green";
                clickedDiv.style.color = "white";
            } else {
                clickedDiv.style.backgroundColor = "red";
                clickedDiv.style.color = "white";
            }

            // Disable all options in the current question
            answerContainer.querySelectorAll('div').forEach(div => {
                div.style.pointerEvents = 'none'; // Prevent further clicks
            });
        }
    });
});

play.addEventListener("click", ()=>{
    location.reload();

})
function unlockOptions(question) {
    // Unlock all options in the given question
    question.querySelectorAll('.answers div').forEach(div => {
        div.style.pointerEvents = 'auto'; // Enable clicking
        div.style.backgroundColor = ''; // Reset background color
        div.style.color = ''; // Reset text color
    });
}
