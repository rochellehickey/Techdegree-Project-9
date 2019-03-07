// Alert box
const closeButton = document.querySelector(".close-button");
const alertBox = document.querySelector(".alert-box");
const hidden = document.querySelector(".hidden");

closeButton.addEventListener('click', function() {
  // adds/toggles class of hidden to alert-box which removes it from the DOM
  alertBox.classList.toggle('hidden');
});
