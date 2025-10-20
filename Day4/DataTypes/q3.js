function getValue(a) {
  if (a === undefined || a === "" || a === null) {
    return "No Value";
  } else {
    return a;
  }
}

console.log(getValue(null));
console.log(getValue());
console.log(getValue(""));
console.log(getValue(5));
