function IsAnagram(words) {
    var newarr = [];
    var temp = [];
    var main = [];
    for (var i = 0; i < words.length; i++) {
        var letters = words[i].split("");
        newarr.push(letters.sort().join(""));
    }
    //   console.log(newarr);
    for (var j = 0; j < newarr.length; j++) {
        if (newarr[j] === newarr[j + 1]) {
            temp.push(words[j]);
            //   console.log("hi");
        }
        else {
            temp.push(words[j]);
            main.push(temp);
            temp = [];
            //   console.log("hello");
        }
    }
    return main;
}
console.log(IsAnagram(["care", "race", "acre", "dog", "god", "cat"]));
