function cloneObject(obj) {
  const clone1 = { ...obj };

  let clone2 = {};
  Object.assign(clone2, obj);

  //   console.log(clone1);
  //   console.log(clone2);

  obj.address.location = "kochi";

  //   console.log(clone1);
  //   console.log(clone2);

  if (clone1.address.location === obj.address.location)
    console.log("nested property of clone-1 changed");

  if (clone2.address.location === obj.address.location)
    console.log("nested property of clone-2 changed");
}

cloneObject({
  id: 2,
  user: "pratyush",
  isAdmin: true,
  age: 22,
  address: { location: "kottayam", pin: 686001 },
});
