const readline = require("readline");
let emp = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  let temp = {};
  if (input === "add") {
    rl.question("enter employee name", (ename) => {
      temp.name = ename;

      rl.question("enter employee's age", (eage) => {
        temp.age = eage;

        rl.question("enter employee's role", (erole) => {
          temp.role = erole;
          emp.push(temp);
          console.log(emp);
        });
      });
    });
  } else if (input === "remove") {
    rl.question("enter name of employee you want to delete", (ename) => {
      const dname = ename;
      for (let i = 0; i < emp.length; i++) {
        if (emp[i].name === dname) emp.splice(i, i + 1);
        console.log(emp);
      }
    });
  }
});
