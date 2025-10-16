// 9. Write a program that checks if a given string is a valid email address.

function validEmail(str) {
  const email = str;
  const letters = str.split("");

  if (letters.includes("@") && email.substr(-4) === ".com") {
    console.log("True");
  } else {
    console.log("False");
  }
}

validEmail("test@example.com");
validEmail("invalid.email.com");
validEmail("user@domain");
