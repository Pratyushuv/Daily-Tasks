function newArray(arr) {
    var arrObj = [];
    arr.forEach(function (a) {
        if (a.marks > 50)
            arrObj.push({ name: a.name, status: "pass" });
        else
            arrObj.push({ name: a.name, status: "fail" });
    });
    return arrObj;
}
console.log(newArray([
    { name: "Alice", marks: 42 },
    { name: "Bob", marks: 67 },
    { name: "Charlie", marks: 35 },
]));
