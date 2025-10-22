const log = document.querySelector(".log");
const textinput = document.querySelector(".textinput");
const table = document.querySelector(".table");

var arr = [];
let obj = {};
// log.addEventListener("click", () => {
//   const child = Array.from(table.children);
//   child.forEach((c) => c.remove());
//   console.log(arr);

//   const html = arr.map((key) => {
//     return `
//         <tr class="headstyle2">
//           <td>${key.data}</td>
//           <td>${key.inputType}</td>
//           <td>${key.timeStamp}</td>
//           <td>${key.isTrusted}</td>
//         </tr>
//       `;
//   });

//   table.insertAdjacentHTML(
//     "beforeend",
//     `<tr class="headstyle1">
//           <th>Data</th>
//           <th>inputType</th>
//           <th>TimeStamp</th>
//           <th>isTrusted</th>
//         </tr>`
//   );

//   html.forEach((h) => table.insertAdjacentHTML("beforeend", h));
//   console.log(html);
//   textinput.value = "";

//   arr = [];
// });

textinput.addEventListener("input", (e) => {
  const child = Array.from(table.children);
  child.forEach((c, i) => {
    if (i != 0) c.remove();
  });
  const d1 = e.data;
  const d2 = e.inputType;
  const d3 = e.timeStamp;
  const d4 = e.isTrusted;
  obj = { data: d1, inputType: d2, timeStamp: d3, isTrusted: d4 };
  arr.push(obj);

  arr.forEach((a) => {
    if (a.data === null) console.log("null");
    else {
      table.insertAdjacentHTML(
        "beforeend",
        `
        <tr class="headstyle2">
          <td>${a.data}</td>
          <td>${a.inputType}</td>
          <td>${a.timeStamp}</td>
          <td>${a.isTrusted}</td>
        </tr>
      `
      );
    }
  });

  console.log(arr);
  if (arr.length >= 10) arr.shift();
});
