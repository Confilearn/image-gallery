const images = document.querySelectorAll(".image");
const enlargedImage = document.getElementById("image-enlarged");
const largeImage = document.querySelector(".large__image");
const toggler = document.querySelector(".toggler");

images.forEach((item) => {
  item.addEventListener("click", function () {
    enlargedImage.style.display = "grid";
    largeImage.innerHTML = this.innerHTML;
  });
});

toggler.addEventListener("click", function () {
  enlargedImage.style.display = "none";
});
