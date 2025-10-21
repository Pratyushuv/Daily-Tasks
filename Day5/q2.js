// Word Frequency Counter

function wordFrequency(str) {
  const obj = {};
  const letters = str.split("");

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === "," || letters[i] === "!") {
      letters.splice(i, 1);
    }
  }
  const newStr = letters.join("").toLowerCase();

  //find freq

  const temp = newStr.split(" ");

  for (let j = 0; j < temp.length; j++) {
    const word = temp[j];
    if (obj[word]) obj[word]++;
    else obj[word] = 1;
  }

  return obj;
}

console.log(wordFrequency("Hello hello world, world! hello world world"));
