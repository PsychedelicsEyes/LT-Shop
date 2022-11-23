const buttonmb = document.querySelector('#mobile-nav');
const navlinks = document.querySelector('.nav-links');

buttonmb.addEventListener('click', function(){
    if(navlinks.style.display === "flex") {
        navlinks.style.display = "none";
    } else {
        navlinks.style.display = "flex"
    }
})

const navbar = document.querySelector('.navbar')

window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
      navbar.classList.add("navbar-scroll");
    } else {
     navbar.classList.remove("navbar-scroll");
    }
};