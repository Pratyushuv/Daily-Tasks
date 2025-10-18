// 4. Write a program that takes a word and prints a pattern like this:

function wordPattern(str) {
  const n = str.length;
  let s = "";
  let s1 = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      s = s + str[j];
    }
    console.log(s);
    s = "";
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      s1 = s1 + str[j];
    }
    console.log(s1);
    s1 = "";
  }
}

wordPattern("CAT");
