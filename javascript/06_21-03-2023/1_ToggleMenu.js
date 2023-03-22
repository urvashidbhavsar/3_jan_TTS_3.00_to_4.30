let disp_menu = document.querySelector(".disp-menu");
let nav_bar = document.querySelector(".nav");
let btn_close = document.querySelector(".close-btn")

// disp_menu.addEventListener("click",function(){
//     nav_bar.classList.add("nav-bar")
// })  
// btn_close.addEventListener("click",function(){
//     nav_bar.classList.remove("nav-bar")
// })
let icon = document.querySelector(".fa-bars");

disp_menu.addEventListener("click",function(){
    nav_bar.classList.toggle("nav-bar")
    if(icon.classList.contains("fa-bars")== true){
       icon.classList.remove("fa-bars")
       icon.classList.add("fa-close")
    }else{
        icon.classList.remove("fa-close")
        icon.classList.add("fa-bars")
    }
})  