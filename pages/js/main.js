// Select DOM elements
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

// Set initial state of menu
let showMenu = false;

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close"); // this adds a class value
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(navItem => navItem.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.remove("close"); // this adds a class value
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(navItem => navItem.classList.remove("show"));
    showMenu = false;
  }
}

menuBtn.addEventListener("click", toggleMenu);
