// GET DOM elements : burger button, nav and content
const burgerBtn = document.getElementById("burger-btn");
const nav = document.getElementById("nav");
const content = document.getElementById("content");

// STATUS : Mobile links visibility
let displayMobileNav = false;

function showLinks(order) {
  if (order == true) {
    nav.classList.add("visible-link");
    nav.classList.remove("invisible-link");
  } else {
    nav.classList.add("invisible-link");
    nav.classList.remove("visible-link");
  }
}

function activeBurger(order) {
  if (order == true) {
    burgerBtn.classList.add("active-burger");
    burgerBtn.classList.remove("inactive-burger");
  } else {
    burgerBtn.classList.remove("active-burger");
    burgerBtn.classList.add("inactive-burger");
  }
}

function darkenContent(order) {
  if (order == true) {
    content.classList.add("darkness-content");
    content.classList.remove("brightness-content");
  } else {
    content.classList.add("brightness-content");
    content.classList.remove("darkness-content");
  }
}

function handleMobileNav(status) {
  if (status == "active") {
    //display links
    nav.classList.add("visible-link");
    nav.classList.remove("invisible-link");
    //cross burger
    burgerBtn.classList.add("active-burger");
    burgerBtn.classList.remove("inactive-burger");
    //darken content
    content.classList.add("darkness-content");
    content.classList.remove("brightness-content");
  } else if (status == "inactive") {
    //hide links
    nav.classList.add("invisible-link");
    nav.classList.remove("visible-link");
    //initial burger
    burgerBtn.classList.remove("active-burger");
    burgerBtn.classList.add("inactive-burger");
    //brighten content
    content.classList.add("brightness-content");
    content.classList.remove("darkness-content");
  }
}

// SWITCH NAV VISIBILITY ON CLICK ON THE BURGER BUTTON
burgerBtn.addEventListener("click", () => {
  displayMobileNav = !displayMobileNav;
  if (displayMobileNav) {
    showLinks(true);
    activeBurger(true);
    darkenContent(true);
  } else {
    showLinks(false);
    activeBurger(false);
    darkenContent(false);
  }
});

// SWITCH NAV VISIBILITY ON RESIZE WINDOW
window.addEventListener("resize", () => {
  //Get window width
  const widthScreen = window.innerWidth;
  if (widthScreen > 768) {
    displayMobileNav = false;
    showLinks(true);
    darkenContent(false);
  } else if (widthScreen <= 768) {
    if (displayMobileNav) {
      showLinks(true);
    } else {
      activeBurger(false);
      showLinks(false);
      darkenContent(false);
      displayMobileNav = false;
    }
  }
});

// CLOSE MOBILE NAV ON CLICK ON THE CONTENT
content.addEventListener("click", () => {
  if (displayMobileNav) {
    displayMobileNav = false;
    showLinks(false);
    activeBurger(false);
    darkenContent(false);
  }
});
