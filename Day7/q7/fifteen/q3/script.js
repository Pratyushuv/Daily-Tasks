const but1 = document.querySelector(".but");
const textinput = document.querySelector(".textinput");
const con = document.querySelector(".con");
const toggle = document.querySelector(".toggle");

//get from local storage
const localData = localStorage.getItem("data") || [];
let ldata = JSON.stringify(localData);
ldata = ldata.slice(1, ldata.length - 1);
ldata = ldata.split(",");

ldata.forEach((l) => {
  const html = `<li class="list">${l}</li>`;
  con.insertAdjacentHTML("beforeend", html);
});

let arr = [];

but1.addEventListener("click", () => {
  const data = textinput.value;

  arr.push(data);

  //add to local storage
  localStorage.setItem("data", arr);

  if (data === "") console.log("nothing");
  else {
    const html = `<li class="list">${data}</li>`;
    con.insertAdjacentHTML("beforeend", html);
    textinput.value = "";
  }
});

con.addEventListener("click", (e) => {
  e.target.classList.toggle("strike");
  console.log(e.target);
});

toggle.addEventListener("click", () => {
  const strikes = document.querySelectorAll(".strike");
  console.log(
    Array.from(strikes).forEach((l) => {
      l.classList.toggle("hide");
    })
  );
});
