const screen = document.querySelector(".screen");

setInterval(function () {
  const width = window.innerWidth;
  const height = window.innerHeight;
  screen.textContent = `width: ${width} height: ${height}`;
}, 1000);
