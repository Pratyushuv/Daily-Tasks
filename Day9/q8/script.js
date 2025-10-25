const li = document.querySelectorAll(".li");

window.addEventListener("keydown", (e) => {
  if (e.key === "A")
    li.forEach((l) => {
      l.classList.toggle("hidden");
    });
});
