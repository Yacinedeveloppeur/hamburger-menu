// DOM elements : burger button and links
const burgerBtn = document.getElementById("burger-btn");
const nav = document.getElementsByClassName("nav")[0];
const content = document.getElementById("content");

// STATUS : Mobile links visibility
let displayMobileLinks = false;

// CLICK ON BURGER BUTTON : TO SWITCH LINKS VISIBILITY
burgerBtn.addEventListener("click", () => {
  displayMobileLinks = !displayMobileLinks;
  if (displayMobileLinks) {
    nav.classList.add("visible-link");
    nav.classList.remove("invisible-link");
    burgerBtn.classList.add("active-burger");
    burgerBtn.classList.remove("inactive-burger");
    content.classList.add("darkness-content");
    content.classList.remove("brightness-content");
  } else {
    nav.classList.add("invisible-link");
    nav.classList.remove("visible-link");
    burgerBtn.classList.remove("active-burger");
    burgerBtn.classList.add("inactive-burger");
    content.classList.add("brightness-content");
    content.classList.remove("darkness-content");
  }
});

// RESIZE WINDOW : TO SWITCH LINKS VISIBILITY
window.addEventListener("resize", () => {
  const widthScreen = window.innerWidth;
  //display links and switch mobile links visibility status to false
  if (widthScreen > 768) {
    // links.style.display = "flex";
    nav.classList.add("visible-link");
    nav.classList.remove("invisible-link");
    displayMobileLinks = false;
    burgerBtn.classList.remove("active-burger");
    burgerBtn.classList.add("inactive-burger");
    content.classList.add("brightness-content");
    content.classList.remove("darkness-content");
    // content.style.backdropFilter = "";
  } else if (widthScreen <= 768) {
    nav.classList.add("invisible-link");
    nav.classList.remove("visible-link");
  }
});

//CLICK ON WINDOW TO CLOSE MOBILE NAV
content.addEventListener("click", () => {
  if (displayMobileLinks) {
    nav.classList.add("invisible-link");
    nav.classList.remove("visible-link");
    content.classList.add("brightness-content");
    content.classList.remove("darkness-content");
    // content.style.backdropFilter = "";
    displayMobileLinks = false;
    burgerBtn.classList.remove("active-burger");
    burgerBtn.classList.add("inactive-burger");
  }
});
