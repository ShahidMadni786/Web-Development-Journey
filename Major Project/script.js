let talk = document.querySelector(".lets");
let pencil = document.querySelector(".pencil");
let arrow = document.querySelector(".pencil i");
let letstalk = document.querySelector(".letstalk");
let letcolor = document.querySelector(".lets-color");
let inner = document.querySelector(".what-we-do");
let outer = document.querySelector(".outer") 
letstalk.addEventListener("mouseover", ()=>{
  pencil.style.padding = "12px 12px 12px 12px";
  talk.style.transform = "translateX(0)"; 
  arrow.classList.remove("fa-pencil");
  arrow.classList.add("fa-arrow-up-right-from-square");
  letcolor.style.color = "#0DA34E";
});
letstalk.addEventListener("mouseout", ()=>{
    pencil.style.padding = "8px 8px 8px 118px";
    talk.style.transform = "translateX(138%)"; 
    arrow.classList.add("fa-pencil");
    arrow.classList.remove("fa-arrow-up-right-from-square");
    letcolor.style.color = "#fff";
});

inner.addEventListener("mouseover", ()=>{
       outer.classList.add("outer-active");
       inner.style.height = "260px";
});
inner.addEventListener("mouseout", () => {
  outer.classList.remove("outer-active");
  inner.style.height = "40px";
});
