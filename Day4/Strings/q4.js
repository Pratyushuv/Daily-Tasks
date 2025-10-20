function reverseWords(sentence) {
  let str = "";
  const words = sentence.split(" ");

  for (let i = words.length - 1; i >= 0; i--) {
    str = str + words[i] + " ";
  }

  console.log(str);
}

reverseWords("this program finds reverse");
