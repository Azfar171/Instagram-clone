document.addEventListener("DOMContentLoaded", function () {
  const suggestions = document.querySelector(".suggestions");
  const initialTop = suggestions.offsetTop;

  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    if (scrollY > initialTop) {
      suggestions.style.position = "fixed";
      suggestions.style.top = "-700px"; // Adjust this value as needed
    } else {
      suggestions.style.position = "absolute";
      suggestions.style.top = initialTop + "px";
    }
  });
});
