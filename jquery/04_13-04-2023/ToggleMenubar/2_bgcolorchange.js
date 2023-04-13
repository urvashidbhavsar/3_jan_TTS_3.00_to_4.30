
// function changebg(){
//     let header_fixed = document.querySelector(".header");
//     let current = window.scrollY;

//     if(current > 0){
//         header_fixed.classList.add("header-fixed");
//     }else{
//         header_fixed.classList.remove("header-fixed");
//     }
// }

// window.addEventListener("scroll",changebg)

$(document).ready(function(){
    $header_fixed = $(".header");
    $(window).scroll(function(){
        $current = $(this).scrollTop();
        if($current > 0){
            $header_fixed.addClass("header-fixed");
        }else{
            $header_fixed.removeClass("header-fixed");
        }
    })
})