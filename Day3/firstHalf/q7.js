function rgbToHex(num) {
  let str = "#";
  const obj = {
    10: "a",
    11: "b",
    12: "c",
    13: "d",
    14: "e",
    15: "f",
    16: "0",
  };

  for (let i = 0; i < num.length; i++) {
    const number = Math.trunc(num[i] / 16);
    console.log(number);
    if (number <= 9) {
      str = str + number;
    } else {
      str = str + obj[number];
    }
  }
  console.log(str);
}

rgbToHex([255, 165, 0]);
