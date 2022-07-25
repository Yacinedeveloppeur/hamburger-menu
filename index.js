// GET DOM elements : burger button, nav and content
const burgerBtn = document.getElementById("burger-btn");
const nav = document.getElementById("nav");
const content = document.getElementById("content");

// STATUS : Mobile links visibility
let displayMobileNav = false;

function handleMobileNav(status) {
  if (status == "active") {
    //links visibility
    nav.classList.add("visible-link");
    nav.classList.remove("invisible-link");
    //Burger animation
    burgerBtn.classList.add("active-burger");
    burgerBtn.classList.remove("inactive-burger");
    //Brightness content
    content.classList.add("darkness-content");
    content.classList.remove("brightness-content");
  } else if (status == "inactive") {
    nav.classList.add("invisible-link");
    nav.classList.remove("visible-link");
    burgerBtn.classList.remove("active-burger");
    burgerBtn.classList.add("inactive-burger");
    content.classList.add("brightness-content");
    content.classList.remove("darkness-content");
  }
}

// CLICK ON BURGER BUTTON : TO SWITCH NAV VISIBILITY
burgerBtn.addEventListener("click", () => {
  displayMobileNav = !displayMobileNav;
  if (displayMobileNav) {
    handleMobileNav("active");
  } else {
    handleMobileNav("inactive");
  }
});

// RESIZE WINDOW : TO SWITCH LINKS VISIBILITY
window.addEventListener("resize", () => {
  //Get window width
  const widthScreen = window.innerWidth;
  if (widthScreen > 768) {
    displayMobileNav = false;
    handleMobileNav("active");
  } else if (widthScreen <= 768) {
    nav.classList.add("invisible-link");
    nav.classList.remove("visible-link");
  }
});

//CLICK ON WINDOW TO CLOSE MOBILE NAV
content.addEventListener("click", () => {
  if (displayMobileNav) {
    displayMobileNav = false;
    handleMobileNav("inactive");
  }
});
