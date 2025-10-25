function deepClone(obj) {
  //   console.log(obj);

  const copy = JSON.parse(JSON.stringify(obj));

  obj.address.location.loc1 = "kanjikuzhy";
  console.log(obj);
  console.log(copy);
}

deepClone({
  name: "pratyush",
  age: 20,
  address: { city: "kottayam", location: { loc1: "kodimatha", loc2: "pala" } },
});
