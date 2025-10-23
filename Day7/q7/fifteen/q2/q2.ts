type strarray = string[];

function IsAnagram(words: string[]): strarray[] {
  let newarr: string[] = [];
  let temp: string[] = [];
  let main: strarray[] = [];

  for (let i: number = 0; i < words.length; i++) {
    const letters: string[] = words[i].split("");
    newarr.push(letters.sort().join(""));
  }
  //   console.log(newarr);

  for (let j: number = 0; j < newarr.length; j++) {
    if (newarr[j] === newarr[j + 1]) {
      temp.push(words[j]);
      //   console.log("hi");
    } else {
      temp.push(words[j]);
      main.push(temp);
      temp = [];
      //   console.log("hello");
    }
  }

  return main;
}

console.log(IsAnagram(["care", "race", "acre", "dog", "god", "cat"]));
