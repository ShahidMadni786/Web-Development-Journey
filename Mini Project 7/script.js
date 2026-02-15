let mainDiv = document.querySelector(".img-container");
let inp = document.querySelector("#input");
let key = "l5CrgHIcX4cwnJM50c8g8Gd-3whNXl7jsttCiRwc_E0";
let searchBtn = document.querySelector("#Search");
let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let btnDiv = document.querySelector(".next-buttons");
let page = 1;


async function getApi() {
    let search = inp.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${search}&client_id=${key}`;
    let response = await fetch(url);
    let data = await response.json();
    let result = data.results;
    console.log(result.length);
    mainDiv.innerHTML = "";
    result.map((value) => {
        console.log(value);
        let imgBox = document.createElement('div');
        imgBox.className = "img-box";
        let img = document.createElement("img");
        img.src = value.urls.small;

        let imageName = document.createElement("div");
        imageName.className = "img-name";
       imageName.textContent = value.alt_description 
       
        imgBox.append(img);
        imgBox.append(imageName);

        mainDiv.append(imgBox)
       
    })
    if(result.length > 0){
        nextBtn.style.display = "block";
    }
    if(page===result.length){
        nextBtn.style.display = "none";
    }
    if(page>1){
        prevBtn.style.display = "block"
    }
    else{
        prevBtn.style.display = "none" 
    }
}



searchBtn.addEventListener("click", ()=>{
    getApi();
   
    nextBtn.addEventListener("click", ()=>{
    mainDiv.innerHTML = "";
    page++;
    getApi();
    })

    prevBtn.addEventListener("click",()=>{
        page--;
        getApi();
    })
})
