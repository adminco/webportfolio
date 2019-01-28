// Select DOM elements
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");
const smHeading = document.querySelector(".sm-heading");
const job1Description = document.querySelector(".job-1-description");
const job1 = document.querySelector(".job-1");
const job2Description = document.querySelector(".job-2-description");
const job2 = document.querySelector(".job-2");
const job3Description = document.querySelector(".job-3-description");
const job3 = document.querySelector(".job-3");
const job4Description = document.querySelector(".job-4-description");
const job4 = document.querySelector(".job-4");
const job5Description = document.querySelector(".job-5-description");
const job5 = document.querySelector(".job-5");
const job6Description = document.querySelector(".job-6-description");
const job6 = document.querySelector(".job-6");

// JQuery for animation
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

  console.log(window.screen.availWidth);

  // Event Handlers Work
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

// Event Handler to toggle menu navigation

// Set initial state of menu
let showMenu = false;

// This fuction is triggered by the event
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
// Event
menuBtn.addEventListener("click", toggleMenu);

// Event Handler for work cards and descriptions
let showCardStill = false; //initial state
let insideJob1 = false;
let showCardStill2 = false;
let insideJob2 = false;
let showCardStill3 = false;
let insideJob3 = false;
let showCardStill4 = false;
let insideJob4 = false;
let showCardStill5 = false;
let insideJob5 = false;
let showCardStill6 = false;
let insideJob6 = false;

// These EventHandlers\Functions handle the card events
job1.addEventListener("mouseover", () => {
  job1Description.classList.add("inFocus");
  insideJob1 = true;
});

job1.addEventListener("mouseleave", () => {
  insideJob1 = false;
  setTimeout(() => {
    if (
      job1Description.classList.contains("inFocusStill") === false &&
      insideJob1 === false
    ) {
      job1Description.classList.remove("inFocus");
    } else if (
      job1Description.classList.contains("inFocus") &&
      showCardStill === true
    ) {
      job1Description.classList.add("inFocusStill");
    }
  }, 100);
});

// These EventHandlers\Functions handle the card-desciption events
job1Description.addEventListener("mouseover", () => {
  showCardStill = true;
});

job1Description.addEventListener("mouseleave", () => {
  showCardStill = false;
  setTimeout(() => {
    if (
      showCardStill === false &&
      job1Description.classList.contains("inFocus")
    ) {
      job1Description.classList.remove("inFocusStill");
    } else if (showCardStill === false && insideJob1 === false) {
      job1Description.classList.remove("inFocus");
      job1Description.classList.remove("inFocusStill");
    }
  }, 100);
});
// 2
job2.addEventListener("mouseover", () => {
  job2Description.classList.add("inFocus2");
  insideJob2 = true;
});

job2.addEventListener("mouseleave", () => {
  insideJob2 = false;
  setTimeout(() => {
    if (
      job2Description.classList.contains("inFocusStill2") === false &&
      insideJob2 === false
    ) {
      job2Description.classList.remove("inFocus2");
    } else if (
      job2Description.classList.contains("inFocus2") &&
      showCardStill2 === true
    ) {
      job2Description.classList.add("inFocusStill2");
    }
  }, 100);
});

// These EventHandlers\Functions handle the card-desciption events
job2Description.addEventListener("mouseover", () => {
  showCardStill2 = true;
});

job2Description.addEventListener("mouseleave", () => {
  showCardStill2 = false;
  setTimeout(() => {
    if (
      showCardStill2 === false &&
      job2Description.classList.contains("inFocus2")
    ) {
      job2Description.classList.remove("inFocusStill2");
    } else if (showCardStill2 === false && insideJob2 === false) {
      job2Description.classList.remove("inFocus2");
      job2Description.classList.remove("inFocusStill2");
    }
  }, 100);
});
//3
job3.addEventListener("mouseover", () => {
  job3Description.classList.add("inFocus3");
  insideJob3 = true;
});

job3.addEventListener("mouseleave", () => {
  insideJob3 = false;
  setTimeout(() => {
    if (
      job3Description.classList.contains("inFocusStill3") === false &&
      insideJob3 === false
    ) {
      job3Description.classList.remove("inFocus3");
    } else if (
      job3Description.classList.contains("inFocus3") &&
      showCardStill3 === true
    ) {
      job3Description.classList.add("inFocusStill3");
    }
  }, 100);
});

// These EventHandlers\Functions handle the card-desciption events
job3Description.addEventListener("mouseover", () => {
  showCardStill3 = true;
});

job3Description.addEventListener("mouseleave", () => {
  showCardStill3 = false;
  setTimeout(() => {
    if (
      showCardStill3 === false &&
      job3Description.classList.contains("inFocus3")
    ) {
      job3Description.classList.remove("inFocusStill3");
    } else if (showCardStill3 === false && insideJob3 === false) {
      job3Description.classList.remove("inFocus3");
      job3Description.classList.remove("inFocusStill3");
    }
  }, 100);
});
//4
job4.addEventListener("mouseover", () => {
  job4Description.classList.add("inFocus4");
  insideJob4 = true;
});

job4.addEventListener("mouseleave", () => {
  insideJob4 = false;
  setTimeout(() => {
    if (
      job4Description.classList.contains("inFocusStill4") === false &&
      insideJob4 === false
    ) {
      job4Description.classList.remove("inFocus4");
    } else if (
      job4Description.classList.contains("inFocus4") &&
      showCardStill4 === true
    ) {
      job4Description.classList.add("inFocusStill4");
    }
  }, 100);
});

// These EventHandlers\Functions handle the card-desciption events
job4Description.addEventListener("mouseover", () => {
  showCardStill4 = true;
});

job4Description.addEventListener("mouseleave", () => {
  showCardStill4 = false;
  setTimeout(() => {
    if (
      showCardStill4 === false &&
      job4Description.classList.contains("inFocus4")
    ) {
      job4Description.classList.remove("inFocusStill4");
    } else if (showCardStill4 === false && insideJob4 === false) {
      job4Description.classList.remove("inFocus4");
      job4Description.classList.remove("inFocusStill4");
    }
  }, 100);
});
//5
job5.addEventListener("mouseover", () => {
  job5Description.classList.add("inFocus5");
  insideJob5 = true;
});

job5.addEventListener("mouseleave", () => {
  insideJob5 = false;
  setTimeout(() => {
    if (
      job5Description.classList.contains("inFocusStill5") === false &&
      insideJob5 === false
    ) {
      job5Description.classList.remove("inFocus5");
    } else if (
      job5Description.classList.contains("inFocus5") &&
      showCardStill5 === true
    ) {
      job5Description.classList.add("inFocusStill5");
    }
  }, 100);
});

// These EventHandlers\Functions handle the card-desciption events
job5Description.addEventListener("mouseover", () => {
  showCardStill5 = true;
});

job5Description.addEventListener("mouseleave", () => {
  showCardStill5 = false;
  setTimeout(() => {
    if (
      showCardStill5 === false &&
      job5Description.classList.contains("inFocus5")
    ) {
      job5Description.classList.remove("inFocusStill5");
    } else if (showCardStill5 === false && insideJob5 === false) {
      job5Description.classList.remove("inFocus5");
      job5Description.classList.remove("inFocusStill5");
    }
  }, 100);
});
//6
job6.addEventListener("mouseover", () => {
  job6Description.classList.add("inFocus6");
  insideJob6 = true;
});

job6.addEventListener("mouseleave", () => {
  insideJob6 = false;
  setTimeout(() => {
    if (
      job6Description.classList.contains("inFocusStill6") === false &&
      insideJob6 === false
    ) {
      job6Description.classList.remove("inFocus6");
    } else if (
      job6Description.classList.contains("inFocus6") &&
      showCardStill6 === true
    ) {
      job6Description.classList.add("inFocusStill6");
    }
  }, 100);
});

// These EventHandlers\Functions handle the card-desciption events
job6Description.addEventListener("mouseover", () => {
  showCardStill6 = true;
});

job6Description.addEventListener("mouseleave", () => {
  showCardStill6 = false;
  setTimeout(() => {
    if (
      showCardStill6 === false &&
      job6Description.classList.contains("inFocus6")
    ) {
      job6Description.classList.remove("inFocusStill6");
    } else if (showCardStill6 === false && insideJob6 === false) {
      job6Description.classList.remove("inFocus6");
      job6Description.classList.remove("inFocusStill6");
    }
  }, 100);
});
