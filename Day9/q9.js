// 9. Write a program that checks if a given string is a valid email address.

function validEmail(str) {
  let flag = true;
  const letters = str.split("@");
  const [part1, part2] = letters;

  function atCount() {
    let c = 0;
    str.split("").forEach((el) => {
      //   console.log(el);
      if (el === "@") {
        c++;
      }
    });
    return c;
  }
  const count = atCount();

  if (count > 1) flag = false;

  if (part2 === undefined) flag = false;
  if (part1 === "") flag = false;

  if (part1?.includes("@") || part2?.includes("@")) flag = false;

  if (!part2?.includes(".")) {
    flag = false;
  } else {
    const [s1, s2, ...arr] = part2.split(".");
    if (s2.length < 2) flag = false;
    // if (s1.length < 2) flag = false;
    if (arr.every((a) => a.length >= 2)) flag = false;
  }

  if (flag) return "valid email";
  else return "invalid email";
}

// console.log(validEmail("test@example.com"));
// console.log(validEmail("invalid.email.com"));
// console.log(validEmail("user@domain"));
console.log(validEmail("sradha.16@g.mail."));
