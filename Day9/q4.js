function IsAnagram(words) {
  var newarr = [];
  var newarr1 = [];
  var temp = [];
  var main = [];
  for (var i = 0; i < words.length; i++) {
    var letters = words[i].split("");
    newarr.push(letters.sort().join(""));
  }
  // console.log(newarr);
  for (let i = 0; i < newarr.length; i++) {
    if (!newarr1.includes(newarr[i])) {
      newarr1.push(newarr[i]);
    }
  }
  // console.log(newarr1);

  for (let j = 0; j < newarr1.length; j++) {
    for (let k = 0; k < words.length; k++) {
      if (newarr1[j] === words[k].split("").sort().join("")) {
        temp.push(words[k]);
        // console.log(words[k]);
      }
    }
    main.push(temp);
    temp = [];
  }
  return main;
}
console.log(IsAnagram(["eat", "tan", "ate", "nat", "bat", "tea", "tab"]));
