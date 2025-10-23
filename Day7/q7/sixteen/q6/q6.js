function frequency(str) {
    var obj = {};
    var letters = str.split("");
    for (var i = 0; i < letters.length; i++) {
        var char = letters[i];
        if (obj[char]) {
            obj[char]++;
        }
        else {
            obj[char] = 1;
        }
    }
    return obj;
}
console.log(frequency("hello"));
console.log(frequency("programming"));
