const con = document.querySelector(".con");
let count = 1;
async function getData() {
  const data1 = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const res1 = await data1.json();
  console.log(res1);
  const data2 = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const res2 = await data2.json();
  console.log(res2);

  for (let i = 0; i < res1.length; i++) {
    if (res1[i].userId === count) {
      const html = `   <div class="card">
        <h1 class="user">USER: ${res1[i].userId}</h1>
        <h1>${res1[i].title}</h1>
        <p>${res1[i].body}</p>
        <p>${res2[count - 1].name}</p>
        <p>${res2[count - 1].email}</p>
      </div>`;

      con.insertAdjacentHTML("beforeend", html);
      count++;
    }
  }
}

getData();
