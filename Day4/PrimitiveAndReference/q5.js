function fun1(user) {
  user.lastActive = "5 pm";
  return user;
}

function fun2(user) {
  return user;
}
let obj = { id: 2, user: "john" };

console.log(fun1(obj));

console.log(fun2(obj));
//TODO
