let number = 2;
let obj = { id: 2, user: "pratyush" };

let cNumber = number;
let cObj = obj;

number = 5;

if (cNumber === number) console.log("copy of Number changed");
else console.log("copy of Number did not changed");

obj.name = "renson";

if (obj.name === cObj.name) console.log("copy of object changed");
else console.log("copy of object did not change");
