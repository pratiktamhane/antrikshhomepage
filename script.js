


$(document).ready(function() {
  // Toggle menu on click
  $("#menu-toggler").click(function() {
    toggleBodyClass("menu-active");
  });

  $(".nav__link").click(function() {
    toggleBodyClass("menu-active");
  });

  function toggleBodyClass(className) {
    document.body.classList.toggle(className);
  }

 });


$('#testimonial-slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay:true,
  arrows:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});

// auto hide navbar on link click 

$('.navbar-collapse a').click(function(){
  $(".navbar-collapse").collapse('hide');
});


// back to top btn

var backToTopButton = document.querySelector('.back-to-top');
var contactButton = document.querySelector('.contact-floating-btn');
var linkedinButton = document.querySelector('.linkedin-floating-btn');
var instaButton = document.querySelector('.insta-floating-btn');
window.onscroll = function (e) {
  var prevScrollpos = window.pageYOffset;
  if(prevScrollpos==0){
      backToTopButton.style.transform = "translateY(80px)"
      contactButton.style.transform = "translateY(110px)"
      linkedinButton.style.transform = "translateY(120px)"
      instaButton.style.transform = "translateY(115px)"
    }else 
    // if(prevScrollpos>900)
    {
      backToTopButton.style.transform = "translateY(0)"
      contactButton.style.transform = "translateY(40px)"
      linkedinButton.style.transform = "translateY(0px)"
      instaButton.style.transform = "translateY(0px)"
    }
   
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 400) {
    contactButton.classList.add('buzzing');
  }else{
    contactButton.classList.remove('buzzing');
  }

  }




// -----------------------------------------------------------



// modal 


$(".menu-item-btn").click(function(){
  $(".contact-modal").fadeToggle();
});

$("#cross-btn").click(function(){
  $(".contact-modal").fadeToggle();
});

$(".contact-floating-btn").click(function(){
  $(".contact-modal").fadeToggle();
});

$(".connect-btn").click(function(){
  $(".contact-modal").fadeToggle();
});



// sidebar 

const sidebar = document.querySelector('.sidebar');
const expandIcon = document.querySelector('.expand-icon');
const sideMenuItem=document.querySelectorAll('.side-menu-item');

expandIcon.addEventListener('click' , ()=>{
    sidebar.classList.toggle('open');
});

sideMenuItem.forEach(element => {
  element.addEventListener('click' , ()=>{
      if(sidebar.classList.contains('open'))
        sidebar.classList.toggle('open');
    })
  }) 


// sidemenu highlight 

const currentService = document.querySelectorAll('#video');
  