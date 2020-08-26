// jquery section
$(document).ready(function () {
  $(".nav_item").click(function () {
    let valuePos = $(this).find("a").attr("value");
    let offsetTop = $("." + valuePos).offset().top;
    //alert(valuePos);
    $("html,body").animate({ scrollTop: offsetTop }, 500);
  });
  $(".smallview").click(function () {
    let valuePos = $(this).find("a").attr("value");
    let offsetTop = $("." + valuePos).offset().top;
    //alert(valuePos);
    $("html,body").animate({ scrollTop: offsetTop }, 500);
  });
  $(".nav_item_bars").click(function () {
    $(".nav_item_side").toggleClass("active");
    $(".nav_item_side_item").toggleClass("active");
    $(".nav_item_side_background").toggleClass("active");
  });
  $(".nav_item_bars").click(function () {
    $(this).toggleClass("open");
  });
  $(".nav_item_side_background").click(function () {
    $(".nav_item_side").removeClass("active");
    $(".nav_item_side_item").removeClass("active");
    $(".nav_item_side_background").removeClass("active");
    $(".nav_item_bars").removeClass("open");
  });
  $(window).scroll(function () {
    $(".nav_item_side").removeClass("active");
    $(".nav_item_side_item").removeClass("active");
    $(".nav_item_side_background").removeClass("active");
    $(".nav_item_bars").removeClass("open");
  });
});
//java script section

//main navigation function
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav_item_bars2").style.top = "42px";
  } else {
    document.getElementById("nav_item_bars2").style.top = "-20px";
  }

  prevScrollpos = currentScrollPos;
};

// slide show function
var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activeDot";
}
