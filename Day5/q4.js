//pattern

const letter = "A";
let str = "";

let value = letter.charCodeAt("A");

for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    const char = String.fromCharCode(value);
    str = str + char;
  }
  console.log(str);
  str = "";
  value = value + 1;
}
