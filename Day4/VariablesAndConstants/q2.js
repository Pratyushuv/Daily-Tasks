const a = 20;

try {
  a = 30;
} catch (err) {
  console.log("Cannot reassign a const variable");
}
