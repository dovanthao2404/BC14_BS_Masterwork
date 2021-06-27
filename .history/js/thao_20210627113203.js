$(window).scroll(function () {
  var sc = $(window).scrollTop();
  if (sc > 100) {
    $("#header").addClass("nav__fixed");
  } else {
    $("#header").removeClass("nav__fixed");
  }
});

var dropdownBefore = document.querySelector("#menuHeader .dropdown-toggle");
// $(window).width(function () {
//   var w = (window).width();
//   if (w < 992) {
//     if (dropdownBefore.getAttribute("aria-expanded") == "true") {
//       dropdownBefore.style.position = "absolute";
//     }
//   }
// });
dropdownBefore.onclick = function () {
  if (window.innerWidth < 992 && !(dropdownBefore.style.position == "unset")) {
    dropdownBefore.style.position = "unset";
  } else {
    dropdownBefore.style.position = "relative";
  }
};

var icon = document.querySelector("#header .navbar-toggler .fa");
icon.onclick = function iconNavbar() {
  icon.classList.toggle("icon-expand");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("icon-close");
  icon.classList.toggle("fa-times");
  dropDownPagesPosition()
};

$(".counter").countUp();
var themeSwitch = document.getElementById("theme__switch");
themeSwitch.onclick = function () {
  document.body.classList.toggle("dark-theme");
  themeSwitch.classList.toggle("fa-moon");
  themeSwitch.classList.toggle("fa-sun");
  dropDownPagesPosition()
};
function dropDownPagesPosition() {
  if (window.innerWidth < 992) {
    if (dropdownBefore.getAttribute("aria-expanded") == "true") {
      dropdownBefore.style.position = "relative";
    }
  }
}