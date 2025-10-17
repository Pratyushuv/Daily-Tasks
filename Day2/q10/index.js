const images = [];
let count = 0;
var image1;

const upload = document.getElementById("myFile");
const button = document.querySelector(".button");
const gallery = document.querySelector(".gallery");
const message = document.querySelector(".message");
console.log(upload.value);

const child = document.querySelectorAll(".gallery img");
if (child.length === 0) {
  message.insertAdjacentHTML("afterbegin", "<h1>Upload to see images</h1>");
}

button.onclick = (e) => {
  e.preventDefault();
  count++;
  console.log(count);
  if (count != 0) message.remove();
  else
    message.insertAdjacentHTML("afterbegin", "<h1>Upload to see images</h1>");

  const selectedFile = upload.files[0].name;
  console.log(selectedFile);
  images.push(selectedFile);
  localStorage.setItem("img", images);
  console.log("helo");
  upload.value = "";
  const html = `<img class="imge" src="images/${selectedFile}" alt="" />`;
  gallery.insertAdjacentHTML("beforeend", html);
  image1 = document.querySelectorAll(".imge");
  console.log(image1);
  if (image1) {
    image1.forEach((image1) => {
      image1.addEventListener("click", (e) => {
        e.target.remove();
        count--;
      });
    });
  }
};
