const list = document.querySelector(".list");

window.addEventListener("keydown", (e) => {
  if (e.key === "A") list.classList.toggle("hide");
});
