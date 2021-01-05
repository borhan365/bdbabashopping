
// Hero right slider
var HeroRightSlider = new Swiper('.hero-right-slider', {
    pagination: {
      el: '.swiper-pagination',
    },
  });


// Profile page order list
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});



// Category slider
var CategorySlider = new Swiper('.category-slider', {
  slidesPerView: 8,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


// toggle left profile sidebar
function SidebarToggle() {
    var SidebarMenu = document.getElementById("LeftSidebar");
    if (SidebarMenu.style.display === "none") {
      SidebarMenu.style.display = "block";
    } else {
      SidebarMenu.style.display = "none";
    }
  }

// toggle right cart sidebar
function CartSidebarToggle() {
  var CartSidebarMenu = document.getElementById("CartSidebar");
  
  if (CartSidebarMenu.style.display === "none") {
    CartSidebarMenu.style.display = "block";
  } else {
    CartSidebarMenu.style.display = "none";
  }
}




// Click to margin top icon

const ClickToTop = document.querySelector('.ClickTop');

window.addEventListener('scroll', () => {

    if (window.pageYOffset > 100) {
        ClickToTop.classList.add("active");
    } else {
        ClickToTop.classList.remove("active");
    }
})

ClickToTop.addEventListener("click", function(){
    window.scrollTo(0, 0);
});


// Sticky menu
window.onscroll = function() {myFunction()};

var MainMenu = document.getElementById("MainMenu");
var stickyMenu = MainMenu.offsetTop;

function myFunction() {

  if (window.pageYOffset >= stickyMenu) {

    MainMenu.classList.add("stickyMenu")
    document.querySelector('stickyMenu').style.zIndex = "1000";

  } else {

    MainMenu.classList.remove("stickyMenu");

  }

}