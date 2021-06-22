var icon = document.querySelector("#header .navbar-toggler .fa");
icon.onclick = function iconNavbar() {
  icon.classList.toggle("icon-expand");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("icon-close");
  icon.classList.toggle("fa-times");
};
$(".counter").countUp();
var themeSwitch = document.getElementById("theme__switch");
themeSwitch.onclick = function () {
  document.body.classList.toggle("dark-theme");
  themeSwitch.classList.toggle("fa-moon");
  themeSwitch.classList.toggle("fa-sun");
};
