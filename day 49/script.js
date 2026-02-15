let button = document.querySelector(".btn");
let p = document.querySelector("#cats")


let url = "https://cat-fact.herokuapp.com/facts";
let getCat = async ()=>{
   let response = await fetch(url);
   console.log(response);
  let data =  await response.json();
    console.log(data[2].text);
    
    p.textContent = data[2].text;
  
}



button.addEventListener("click",getCat)