const box = document.querySelector(".box");

box.addEventListener("mouseover", () => {
  console.log("hi");
  const num1 = Math.floor(Math.random() * 255);
  const num2 = Math.floor(Math.random() * 255);
  const num3 = Math.floor(Math.random() * 255);
  console.log(num1, num2, num3);
  box.style.backgroundColor = `rgb(${num1}, ${num2}, ${num3})`;
});
