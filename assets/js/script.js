/* Author:
Inayatullah
*/

const slider = document.getElementById("slider"),
  label = document.querySelector("label");

label.innerText = slider.value;
label.style.left = slider.value + "%";

slider.addEventListener('input', function () {
  label.innerText = slider.value;
  label.style.left = slider.value + "%";
});























