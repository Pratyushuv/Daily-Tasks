function IsAnagram(word1, word2) {
    var letters1 = word1.split("");
    var letters2 = word2.split("");
    var sorted1 = letters1.sort();
    var sorted2 = letters2.sort();
    for (var i = 0; i < sorted1.length; i++) {
        if (sorted1[i] != sorted2[i]) {
            return false;
        }
    }
    return true;
}
console.log(IsAnagram("silent", "Listen"));
console.log(IsAnagram("restful", "fluster"));
console.log(IsAnagram("hello", "world"));
