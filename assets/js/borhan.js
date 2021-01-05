
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


// Custom js
function SidebarToggle() {
    var SidebarMenu = document.getElementById("LeftSidebar");
    if (SidebarMenu.style.display === "none") {
      SidebarMenu.style.display = "block";
    } else {
      SidebarMenu.style.display = "none";
    }
  }   

  
  // Increase numbers
 function decreseNumber() {
  const CartValue = document.getElementById('textBox');
  alert(CartValue.value);
}


























