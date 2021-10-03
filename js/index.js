var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: "#mainNav",
});

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
