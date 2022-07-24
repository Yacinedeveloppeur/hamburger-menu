// DOM elements : burger button and links
const burgerBtn = document.getElementById("burger-btn");
const links = document.querySelectorAll(".nav .nav_links");

// Status : Mobile links visibility
let displayMobileLinks = false;
// Switch Mobile links visibility on click
burgerBtn.addEventListener("click", () => {
  displayMobileLinks = !displayMobileLinks;
  if (displayMobileLinks) {
    links.forEach((link) => {
      link.style.display = "block";
    });
    document.getElementById("content").style.backdropFilter = "brightness(8%)";
  } else {
    links.forEach((link) => {
      link.style.display = "none";
    });
    document.getElementById("content").style.backdropFilter = "";
  }
});

// Switch links and Mobile links visibility on resizing window
window.addEventListener("resize", () => {
  const widthScreen = window.innerWidth;
  //display links and switch mobile links visibility status to false
  if (widthScreen > 768) {
    links.forEach((link) => {
      link.style.display = "block";
      displayMobileLinks = false;
    });
  } else if (widthScreen <= 768) {
    //if mobile links visibility status is true display links
    if (displayMobileLinks) {
      links.forEach((link) => {
        link.style.display = "block";
      });
    }
    // if mobile links visibility status is false hide links
    else {
      links.forEach((link) => {
        link.style.display = "none";
      });
    }
  }
});

document.getElementById("content").addEventListener("click", () => {
  if (displayMobileLinks) {
    links.forEach((link) => {
      link.style.display = "none";
    });
    document.getElementById("content").style.backdropFilter = "";
    displayMobileLinks = false;
  }
});