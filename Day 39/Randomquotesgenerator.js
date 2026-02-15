let rand = Math.random();
let arr = [
"Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",

"In the end, we only regret the chances we didn’t take.– Lewis Carroll" ,

"The best way to predict the future is to create it. – Peter Drucker ",

"Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",

"Believe you can and you're halfway there. – Theodore Roosevelt",                           

"It does not matter how slowly you go as long as you do not stop. – Confucius",

"You are never too old to set another goal or to dream a new dream. – C.S. Lewis",

"Hardships often prepare ordinary people for an extraordinary destiny.– C.S. Lewis" ,

"Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",

"Don’t watch the clock; do what it does. Keep going. – Sam Levenson",

"The only way to do great work is to love what you do. – Steve Jobs",

"Your time is limited, so don’t waste it living someone else’s life. – Steve Jobs"

]

let QuotesGen = ()=>{
          let i = Math.floor(Math.random()*arr.length);
          console.log(arr[i]);
          
}
QuotesGen();