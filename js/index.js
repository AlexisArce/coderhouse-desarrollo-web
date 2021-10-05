// scrollSpy (bootstrap)
let scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#mainNav",
});

// tooltips (bootstrap)
let tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

// to hide navbar after clicked on link in mobile devices
const navLinks = document.getElementById("navbarSupportedContent");
navLinks.addEventListener(
  "click",
  () => {
    const toggler = document.getElementById("navbar-toggler");
    const style = window.getComputedStyle(toggler);
    if (style.display === "block") {
      setTimeout(() => {
        toggler.click();
      }, 500);
    }
  },
  false
);

// Get the button
let backToTopbutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopbutton.style.display = "block";
  } else {
    backToTopbutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
backToTopbutton.addEventListener("click", backToTop);

function backToTop() {
  document.querySelector("#home").scrollIntoView({
    behavior: "smooth",
  });
}
