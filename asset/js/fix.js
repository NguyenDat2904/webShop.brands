function Copymenu() {
  const dptCategory = document.querySelector(".dpt-cat");
  const dptPlace = document.querySelector(".departments");
  dptPlace.innerHTML = dptCategory.innerHTML;

  const mainNav = document.querySelector(".header-nav nav");
  const navPlace = document.querySelector(".off-canvas nav");
  navPlace.innerHTML = mainNav.innerHTML;

  const topNav = document.querySelector(".header-top .wrapper");
  const topPlace = document.querySelector(".off-canvas .thetop-nav");
  topPlace.innerHTML = topNav.innerHTML;
}
Copymenu();

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

const subMenu = document.querySelectorAll(".has-child .icon-small")
subMenu.forEach((menu) => menu.addEventListener("click", toggle))
function toggle(event) {
  event.preventDefault()
  subMenu.forEach((item) =>
    item != this ? item.closest(".has-child").classList.remove("expanded"): null
  )
  if (this.closest(".has-child").classList != "expanded")
  this.closest(".has-child").classList.toggle("expanded")
}

const menuBtn = document.querySelector(".trigger");
const closeIcon = document.querySelector(".t-close");
const addClass = document.querySelector(".site-off");
menuBtn.addEventListener("click", function () {
  addClass.classList.toggle("showmenu");
});
closeIcon.addEventListener("click", function () {
  addClass.classList.remove("showmenu");
});

const searchBtn = document.querySelector(".t-search");
const tClose = document.querySelector(".search-close");
const showClass = document.querySelector(".site");
searchBtn.addEventListener("click", function () {
  showClass.classList.toggle("showsearch");
});
tClose.addEventListener("click", function () {
  showClass.classList.remove("showsearch");
});
