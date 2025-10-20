function Capitalize(sentence) {
  str = "";
  for (let i = 0; i < sentence.length; i++) {
    if (i === 0) str = str + sentence[i].toUpperCase();
    else if (sentence[i] === " ")
      str = str + " " + sentence[i + 1].toUpperCase();
    else if (sentence[i - 1] === " ") continue;
    else str = str + sentence[i];
  }
  console.log(str);
}

Capitalize("this is world program");
