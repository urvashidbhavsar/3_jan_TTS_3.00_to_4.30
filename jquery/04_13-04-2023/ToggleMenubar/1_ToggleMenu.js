// let disp_menu = document.querySelector(".disp-menu");
// let nav_bar = document.querySelector(".nav");
// let btn_close = document.querySelector(".close-btn")
// disp_menu.addEventListener("click",function(){
//     nav_bar.classList.toggle("nav-bar")
//     if(icon.classList.contains("fa-bars")== true){
//        icon.classList.remove("fa-bars")
//        icon.classList.add("fa-close")
//     }else{
//         icon.classList.remove("fa-close")
//         icon.classList.add("fa-bars")
//     }
// })  

$(document).ready(function(){
    $icon = $(".fa-bars");
    $(".disp-menu").click(function(){
        $(".nav").toggleClass("nav-bar")
        if($icon.hasClass("fa-bars")== true){
            $icon.removeClass("fa-bars")
            $icon.addClass("fa-close")
        }else{
            $icon.removeClass("fa-close")
            $icon.addClass("fa-bars")
        }
    })
})