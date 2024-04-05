let navbar=document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.add('active'); 
}

document.querySelector('#nav-close').onclick=()=>{
    navbar.classList.remove('active'); 
}


let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.add('active'); 
}

document.querySelector('#close-search').onclick=()=>{
    searchForm.classList.remove('active'); 
}

window.onscroll=()=>{
    navbar.classList.remove('active'); 

    if(window.scrollY >0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

window.onload=()=>{
    navbar.classList.remove('active'); 

    if(window.scrollY >0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
};

var swiper = new Swiper(".home-slider", {
    loop:true,
    grabCursor:true,  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2000, // Set autoplay interval to 2 second (2000 ms)
      },
  });


  var swiper = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2000, // Set autoplay interval to 2 second (2000 ms)
    },
    breakpoints: {
      0: {
        slidesperview: 1,
      },
      768: {
        slidesperview: 2,
      },
      991: {
        slidesperview: 3,
      },
    },
  });
  