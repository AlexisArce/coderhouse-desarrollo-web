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
