"use-strict";

// for mobile navigation
const headerEl = document.querySelector(".header");
const btnIcon = document.querySelector(".btn-icon");
const iconOpen = document.querySelector(".icon-open");
const iconClose = document.querySelector(".icon-close");
console.log(btnIcon, iconClose, iconOpen);
const toggleMobileNav = () => {
  if (iconClose.classList.contains("hidden")) {
    iconOpen.classList.add("hidden");
    iconClose.classList.remove("hidden");
  } else {
    iconClose.classList.add("hidden");
    iconOpen.classList.remove("hidden");
  }
};

btnIcon.addEventListener("click", toggleMobileNav);
btnIcon.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
