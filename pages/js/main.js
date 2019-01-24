// import Typed from 'typed.js'

// Select DOM elements
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const smHeading = document.querySelector(".sm-heading");

// JQuery to animate work description
$(document).ready(() => {
  const $itemDescription = $(".item-description");
  const $itemDescriptionB = $(".item-description_b");
  const $itemDescriptionC = $(".item-description_c");
  const $itemDescriptionD = $(".item-description_d");
  const $itemDescriptionE = $(".item-description_e");
  const $btn1 = $(".btn1");
  const $btn2 = $(".btn2");
  const $btn3 = $(".btn3");
  const $btn4 = $(".btn4");
  const $btn5 = $(".btn5");
  
  
  // Event Handlers
  $btn1.on("click", event => {
    event.currentTarget;
    $itemDescription.toggle(500);
  });
  $btn2.on("click", event => {
    event.currentTarget;
    $itemDescriptionB.toggle(500);
  });
  $btn3.on("click", event => {
    event.currentTarget;
    $itemDescriptionC.toggle(500);
  });
  $btn4.on("click", event => {
    event.currentTarget;
    $itemDescriptionD.toggle(500);
  });
  $btn5.on("click", event => {
    event.currentTarget;
    $itemDescriptionE.toggle(500);
  });
});

// Set initial state of menu
let showMenu = false;
let showDescriptionEvent = false;

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close"); // this adds a class value
    menu.classList.add("show");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    navItems.forEach(navItem => navItem.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.remove("close"); // this removes a class value
    menu.classList.remove("show");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    navItems.forEach(navItem => navItem.classList.remove("show"));
    showMenu = false;
  }
}

menuBtn.addEventListener("click", toggleMenu);

// Type JS Animation
var options = {
  strings: [
    "",
    'Full Stack^1000 Developer',
    'Systems Engineer',
    'IT^1000 Support Analyst',
    'DevOps^1000 Engineer'
  ],
  typeSpeed: 250,
  startDelay: 0,
  smartBackspace: true,
  backDelay: 1000,
  loop: true,
  loopCount: Infinity,
  showCursor: false,
  // shuffle: true,
}

var typed = new Typed(smHeading, options);




