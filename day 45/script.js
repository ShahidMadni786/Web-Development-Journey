let mysScore = 0;
let compScore = 0;

let choices = document.querySelectorAll('.choice');
let user = document.querySelector('#you');
let comp = document.querySelector('#comp');
let message = document.querySelector('#msg');
let msg = document.querySelector('.message');

choices.forEach((choice)=>{
        choice.addEventListener('click', ()=>{
            let userChoice = choice.getAttribute('id');
            console.log('user choice is : ', userChoice);
            let compChoices = ['rock', 'papper', 'scissor'];
            let rand = Math.floor(Math.random()*3);
            let compChoice = compChoices[rand];
            console.log('Computer choice is : ', compChoice);
            userWin(userChoice,compChoice);
        })
});

    let userWin = (userChoice,compChoice)=>{
        if (userChoice==='papper'&& compChoice==='rock') {
            mysScore+=1;
            user.textContent = mysScore;
            message.textContent = 'You Have won you got 1 point';
            msg.style.backgroundColor = 'green';
            console.log("You Have won you got 1 point");
        }
        else if(userChoice==='rock'&& compChoice==='scissor'){
            console.log("You Have won you got 1 point");
            mysScore+=1;
            user.textContent = mysScore;
            message.textContent = 'You Have won you got 1 point';
            msg.style.backgroundColor = 'green';
        }
        else if(userChoice==='scissor'&& compChoice==='papper'){
            console.log("You Have won you got 1 point");
            mysScore+=1;
            user.textContent = mysScore;
            message.textContent = 'You Have won you got 1 point';
            msg.style.backgroundColor = 'green';
        }
        else if (userChoice===compChoice) {
            console.log("game is tied");
          
        }
        else{
            console.log("you have lost");
            compScore+=1;
            comp.textContent = compScore;
            message.textContent = 'Computer get 1 point';
            msg.style.backgroundColor = 'red';
        }
     
    };