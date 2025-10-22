const box = document.querySelector(".box");

box.addEventListener("dblclick", () => {
  const num1 = Math.floor(Math.random() * 255);
  const num2 = Math.floor(Math.random() * 255);
  const num3 = Math.floor(Math.random() * 255);
  console.log(num1, num2, num3);
  box.style.border = `5px solid rgb(${num1}, ${num2}, ${num3})`;
});
