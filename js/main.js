const button = document.querySelector("#messageButton");
const output = document.querySelector("#messageOutput");

button.addEventListener("click", function () {
  output.textContent = "Your JavaScript is connected and working.";
});