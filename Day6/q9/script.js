const button = document.querySelector(".but");
const textinput = document.querySelector(".textinput");
const list = document.querySelector(".list");

button.addEventListener("click", () => {
  if (textinput.value === "") console.log("enter a value");
  else {
    const html = `<li>${textinput.value}</li>`;

    list.insertAdjacentHTML("beforeend", html);
    textinput.value = "";
  }
});
