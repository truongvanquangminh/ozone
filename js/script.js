$(document).ready(function () {

  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
  });
});

// Nút GO TO BACK 
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 300;
  document.documentElement.scrollTop = 0;
}

// Hiệu ứng load trang
//<![CDATA[
$(window).bind("load", function () {
  jQuery("#status").fadeOut();
  jQuery("#loader").fadeOut();
});
//]]>

// Lazy load ảnh
$(document).ready(function () {
  $("img.lazy").lazyload({
    effect: "fadeIn"
  });

});