let menu = document.querySelector('#menu-btn')
let navbar = document.querySelector('.header .navbar')

menu.onclick  =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};


menu.pnscroll  =() =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });