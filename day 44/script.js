let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let game = document.querySelectorAll('.game .box')
let myTurnO = true;

let winArr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

 document.addEventListener('click',(event)=>{
    if(event.target.classList.contains('box')&& event.target.textContent === ''){
     if(myTurnO===true){
         event.target.textContent  = 'O';
         myTurnO = false;
     }
     else{
        event.target.textContent  = 'X';
        myTurnO = true;
     }

     setTimeout(() => {
        if (checkWin() === true) {
            boxes.forEach((box) => {
                box.textContent = "";
            });
            myTurnO = true;  
        }
    }, 100);
    }
    
 })
 reset.addEventListener('click', ()=>{
    boxes.forEach((box)=>{
        box.textContent = "";
        box.style.pointerEvents = "auto";
    })
    myTurnO = true;
 });

 let checkWin = ()=>{
    for(let i=0; i<winArr.length; i++){
        let [a,b,c] = winArr[i];
        if(boxes[a].textContent !== '' &&
            boxes[a].textContent === boxes[b].textContent &&
            boxes[a].textContent === boxes[c].textContent){
            alert('Congrats Player ' +boxes[a].textContent+" has won the Game");
            return true;
        } 
    }
    return false
 };

//  if(myTurnO='0'===winArr[i])
// boxes.forEach((box)=>{
//      box.addEventListener('click', ()=>{
//         if(myTurnO===true){
//             box.textContent = 'O';
//         }
//         else{
//             box.textContent = 'x';
//         }
//      } );

// })