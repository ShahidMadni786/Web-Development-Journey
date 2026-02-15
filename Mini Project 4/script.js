let range = document.querySelector("#range");
let count = document.querySelector("#count");
let lower = document.querySelector('#lowercase');
let upper = document.querySelector('#uppercase');
let num = document.querySelector('#numbers');
let symbol = document.querySelector('#symbols');
let strength = document.querySelector('#strength-update');
let genPass = document.querySelector('#pass');
let pass = document.querySelector('#password');
let symbArr = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', ']', '{', '}', '\\', '|', ';', ':', '\'', '"', ',', '.', '/', '<', '>', '?'];
let copyBtn = document.querySelector('#copy-btn');
let copied = document.querySelector("#copy")
let checkBoxes = document.querySelectorAll(".check-boxes input[type='checkbox']");


strength.textContent = '';

genPass.addEventListener("click", ()=>{
    strengthUpdate();
    Password();
    pass.type = 'text';
});
copyBtn.addEventListener('click', ()=>{
    if (pass.value) {
        copy();   
    }
    
})
let limit  = 10;

function rangeHandler (){
    limit = range.value;
    count.textContent = range.value;
}


range.addEventListener("input",rangeHandler);
let randValue = (min, max)=>{
   return Math.floor(Math.random()*(max-min)+min)
    
}
let uppercaseGenerator = ()=>{
    let upper = String.fromCharCode(randValue(65,91));
   return upper;
   
}
let lowercaseGenerator = ()=>{
    let lower = String.fromCharCode(randValue(97,122));
   return lower;
}
let numbersGenerator = ()=>{
    return randValue(0,9);
}
let symbolsGenerator = ()=>{
   let rand =  randValue(0,symbArr.length);
    for(let i =0; i<symbArr.length; i++){
           return symbArr[rand];
    }
}


let Password = () => {
    let password = '';
    let availableGenerators = [];
    let mandatoryChars = [];

    
    if (lower.checked) {
        availableGenerators.push(lowercaseGenerator);
        
        mandatoryChars.push(lowercaseGenerator());
    }
    if (upper.checked) {
        availableGenerators.push(uppercaseGenerator);
        
        mandatoryChars.push(uppercaseGenerator());
    }
    if (num.checked) {
        availableGenerators.push(numbersGenerator);
      
        mandatoryChars.push(numbersGenerator());
    }
    if (symbol.checked) {
        availableGenerators.push(symbolsGenerator);
        
        mandatoryChars.push(symbolsGenerator());
    }

    
    password = mandatoryChars.join(''); 

   
    for (let i = password.length; i < limit; i++) {
       
        let randomFunc = availableGenerators[randValue(0, availableGenerators.length)];
       
        password += randomFunc();
    }


    password = shufflePassword(password);

 
    pass.value = password;
};
let shufflePassword = (password) => {
    let arr = password.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
};

let copy = ()=>{
    pass.select();
    navigator.clipboard.writeText(pass.value);
    setTimeout(()=>{
        copied.style.display = 'block';
    },500)
  
    setTimeout(()=>{
     copied.style.display = 'none';
    },1500);
}
let strengthUpdate = () => {
    let typesCount = 0;

  
    if (lower.checked) typesCount++;
    if (upper.checked) typesCount++;
    if (num.checked) typesCount++;
    if (symbol.checked) typesCount++;

    
    if (limit >= 12 && typesCount === 4) {
        strength.textContent = 'Strongest';
    } else if (limit >= 10 && typesCount >= 3) {
        strength.textContent = 'Strong';
    } else if (limit >= 8 && typesCount >= 3) {
        strength.textContent = 'Medium';
    } else if (limit >= 6 && typesCount >= 2) {
        strength.textContent = 'Easy';
    } else {
        strength.textContent = 'Weak';
    }
};
let inputHandler = ()=>{
    let count = 0;
checkBoxes.forEach((checkbox)=>{
   
    if (checkbox.checked) {
        count++;
       
   }
   if (count>=limit) {
    limit = count;
    range.value = count;
    rangeHandler();
}
});}
checkBoxes.forEach((checkbox)=>{
       checkbox.addEventListener("change", inputHandler)
})