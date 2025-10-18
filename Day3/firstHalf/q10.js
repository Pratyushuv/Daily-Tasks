function validEmaiil(str) {
  const pattern = /^[A-Za-z]+@[A-Za-z]+\.[A-Za-z]{2,}$/;

  console.log(pattern.test(str));
}

validEmaiil("test@example.com");

validEmaiil("invalid.email.com");
validEmaiil("user@domain");
