let shahid = document.getElementById('shahid');

let changename = ()=>{
    shahid.textContent = 'Mitha Madni'
};
shahid.addEventListener('click', changename);

let anchor = document.querySelector('a')
anchor;

function Def(event) {
    event.preventDefault();
    anchor.textContent = 'google pe click hogya bhia'
   };
   anchor.addEventListener('click', Def, true);


   let addPara = (event
   )=>{
     if (event.target.nodeName === 'SPAN') {
        alert('your have clciked on : ' +event.target.textContent) 
     }
   }
//    let paras = document.querySelectorAll('p');
//    for(let i = 0; i<paras.length; i++){
//     let para = paras[i];
//     para.addEventListener('click', addPara)
//    }
let mydiv = document.getElementsByClassName('para-box');
document.addEventListener('click',addPara );

let mode = document.getElementById('mode');

let darkMode = () => {
    let b = document.querySelector('body');
    if (b.classList.contains('light')) {
        b.classList.add('dark');
        b.classList.remove('light');
    } else {
        b.classList.add('light');
        b.classList.remove('dark');
    }
}

mode.addEventListener('click',darkMode)