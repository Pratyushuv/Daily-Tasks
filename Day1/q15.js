// 15. Write a program that takes a string as input and returns the reverse of each word in the string while preserving the word order.

function reverseString(str) {
  let rev = "";
  const words = str.split(" ");
  //   console.log(words);

  for (let j = 0; j < words.length; j++) {
    const n = words[j].length;
    const word = words[j];

    for (let i = n - 1; i >= 0; i--) {
      rev = rev + word[i];
    }
    rev = rev + " ";
  }

  console.log(rev);
}

reverseString("Hello world");
reverseString("Programmers are awesome");
reverseString("Programming is fun");
