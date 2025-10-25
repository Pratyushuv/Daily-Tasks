// 8. Write a function which returns textual representation of a number.

function numToText(num) {
  let str = "";
  let first;
  const num1 = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  const num2 = {
    2: "twenty",
    3: "thirty",
    4: "fourty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety",
  };

  const n = num.toString().length;
  //   console.log(n);

  for (let i = 1; i <= n; i++) {
    //one digit
    if (n == 1) {
      str = str + num1[Number(num.toString()[i - 1])];
    }
    //2 digit number
    if (n == 2) {
      if (i === 1) {
        const secnum = num.toString()[i - 1];
        // if (Number(secnum) === 0) continue;
        first = num2[Number(secnum)];
        str = str + first + " ";
      }
      if (i === 2) {
        const secnum = num.toString()[i - 1];
        if (Number(secnum) === 0) continue;
        sec = num1[Number(secnum)];
        str = str + sec + " ";
      }
    }

    //3 digit number
    if (n === 3) {
      //hundreds
      if (
        i === 1 &&
        Number(num.toString()[i]) === 0 &&
        Number(num.toString()[i + 1]) === 0
      ) {
        str = str + num1[Number(num.toString()[i - 1])] + " hundred";
        break;
      }

      //111
      if (
        i === 1 &&
        Number(num.toString()[i]) === 1 &&
        Number(num.toString()[i + 1]) === 1
      ) {
        str = str + "hundred and eleven";
        break;
      }

      const temp1 = " hundred and ";
      if (i === 1) {
        const firstnum = num.toString()[i - 1];
        first = num1[Number(firstnum)];
        str = str + first;
      }

      if (i === 2) {
        str = str + temp1;
        const secnum = num.toString()[i - 1];
        if (Number(secnum) === 0) continue;
        sec = num2[Number(secnum)];
        str = str + sec + " ";
      }

      if (i === 3) {
        const thirdnum = num.toString()[i - 1];
        if (Number(thirdnum) === 0) break;
        third = num1[Number(thirdnum)];
        str = str + third;
      }
    }
  }
  console.log(str);
}

numToText(111);

// 111,
