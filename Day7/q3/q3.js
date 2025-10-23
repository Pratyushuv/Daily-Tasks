function toUpper(arr) {
    var upper = [];
    for (var i = 0; i < arr.length; i++) {
        upper.push(arr[i].toUpperCase());
    }
    return upper;
}
console.log(toUpper(["hi", "hello", "welcome", "pratyush"]));
