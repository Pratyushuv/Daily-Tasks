function extractUsername(email) {
  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") console.log(email.slice(0, i));
  }
}

extractUsername("pratyush@gmail.com");
