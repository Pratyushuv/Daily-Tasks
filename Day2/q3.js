// 3. Write a function which deep clones a given object.

function deepClone(obj) {
  const newObj = {};

  newObj.name = obj.name;
  newObj.country = obj.country;
  newObj.dataTypes = obj.dataTypes;

  console.log(newObj);
}

deepClone({
  name: "JavaScript",
  country: "US",
  dataTypes: ["string", "number", "boolean", "object", "null", "undefined"],
});
