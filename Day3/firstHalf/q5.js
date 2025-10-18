// 5. Write a function to convert text from camelCase to kebab-case.

function toSnakeCase(str) {
  let pos;
  let arr = [];
  const letters = str.split("");
  letters.forEach((l, i) => {
    const flag = l === l.toUpperCase();
    if (flag === true) pos = i;
  });

  for (let i = 0; i < letters.length; i++) {
    if (i === pos) arr.push("-");
    arr.push(letters[i]);
  }

  console.log(arr.join("").toLowerCase());
}

toSnakeCase("myFunction");
