
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
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 10,
    },
  }
});

// ExpressSlider
var ExpressSlider = new Swiper('.ExpressSlider', {
  slidesPerView: 4,
  spaceBetween: 10,
  // loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 10,
    },
  },
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
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


// Mobile toggle menu
function OpenMobileMenu() {
  var MobileSidebarMenu = document.getElementById("LeftSidebar");
  if (MobileSidebarMenu.style.display === "none") {
    MobileSidebarMenu.style.display = "block";
  } else {
    MobileSidebarMenu.style.display = "none";
  }
}

// Mobile Cart Sidebar
function MobileCartSidebarToggle() {
  var MobileCartSidebarMenu = document.getElementById("CartSidebar");
  
  if (MobileCartSidebarMenu.style.display === "none") {
    MobileCartSidebarMenu.style.display = "block";
  } else {
    MobileCartSidebarMenu.style.display = "none";
  }
}





// Click to top

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
