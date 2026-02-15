const menue = document.querySelector(".menu-icon i");
const resNav = document.querySelector(".res-nav"); 

menue.addEventListener("click", ()=>{
      resNav.classList.toggle("res-nav-active");
     
     if (resNav.classList.contains("res-nav-active")) {
        document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
        document.body.style.overflow = "auto"; // Enable scrolling
    }
     
})