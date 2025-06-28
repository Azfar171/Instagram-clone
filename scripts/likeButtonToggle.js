document.addEventListener("DOMContentLoaded", function () {
  const likeButtons = document.querySelectorAll(".like-button");

  likeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const icon = button.querySelector(".post-like-icon");
      const isLiked = button.classList.toggle("liked");

      if (isLiked) {
        icon.src = "icons/red-heart-icon.svg"; // Path to the red heart icon
      } else {
        icon.src = "icons/instagram-heart-icon.svg"; // Path to the default heart icon
      }
    });
  });
});
