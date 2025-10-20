const n = 5;
let j = 7;
for (let i = 0; i < n; i++) {
  var k = 2;
  let m = 4;
  console.log(j); //let variables outside the block can be accessed
}

console.log(k); //variables declared with var can be accessed anywhere
console.log(m); //cannot access variable m outside the loop because let is block scoped
