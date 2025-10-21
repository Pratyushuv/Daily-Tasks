// Password Strength Checker

function checkPassword(password) {
  const numbers = /[0-9]/;
  const special = /[!@#$%^&*()]/;
  const alpha = /[a-zA-Z]/;
  let newArr = [];

  //removing specials & numbers
  let letters = password.split("");
  // console.log(letters);

  for (let i = 0; i < letters.length; i++) {
    if (alpha.test(letters[i])) {
      newArr.push(letters[i]);
    }
  }
  // console.log(newArr);

  //weak

  //Strong
  if (
    password.length >= 8 &&
    special.test(password) &&
    numbers.test(password) &&
    newArr.some((l) => l === l.toUpperCase()) &&
    newArr.some((l) => l === l.toLowerCase())
  ) {
    console.log("Strong");
  }

  //Medium
  else if (password.length >= 6) {
    if (
      (special.test(password) && !numbers.test(password)) ||
      (!special.test(password) && numbers.test(password)) ||
      (special.test(password) && numbers.test(password)) ||
      (!special.test(password) &&
        !numbers.test(password) &&
        newArr.some((l) => l === l.toUpperCase())) ||
      (!special.test(password) &&
        !numbers.test(password) &&
        newArr.every((l) => l === l.toLowerCase()))
    )
      console.log("Medium");
  } else if (password.length < 6) {
    console.log("weak");
  }
}

checkPassword("Pa@#st2f");
// checkPassword("Pradsdty@u4");
// checkPassword("Dad");

// .some(l=> l=== l.toUpperCase)
