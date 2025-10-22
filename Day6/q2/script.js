const content = document.querySelector(".content");
const textarea = document.querySelector(".textarea");
const button1 = document.querySelector(".but");
const button2 = document.querySelector(".toggle");

button1.addEventListener("click", () => {
  content.innerHTML = textarea.value;
  textarea.value = "";
});

button2.addEventListener("click", () => {
  content.classList.toggle("hidden");
});
