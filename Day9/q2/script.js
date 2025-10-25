const con = document.querySelector(".container");
const bar = document.querySelector(".bar");

const progressWidth = 1195;

// bar.style.maxWidth = `${initialWidth}px`;
const conheight = con.scrollHeight - 320;

console.log(conheight);
// progress.style.maxWidth = `300px`;
con.addEventListener("scroll", (e) => {
  w = con.scrollTop.toFixed();
  //   console.log(w);

  const wp = (w / conheight) * 100; //this percent of progress width
  console.log(Math.trunc(wp));

  const width = (wp * progressWidth) / 100;

  bar.style.maxWidth = `${width}px`;
});
