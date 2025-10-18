const input = document.querySelector(".input");
const head = document.querySelector(".head");

input.onkeyup = () => {
  setTimeout(() => {
    if (input.value === "") head.innerHTML = "";
    else head.innerHTML = `hello ${input.value}`;

    console.log(input.value);
  }, 2000);
};
