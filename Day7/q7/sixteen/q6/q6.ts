type object1 = {
  [charKey: string]: number;
};

function Frequency(str: string) {
  const obj: object1 = {};
  const letters: string[] = str.split("");
  for (let i: number = 0; i < letters.length; i++) {
    const char: string = letters[i];
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  return obj;
}

console.log(Frequency("hello"));
console.log(Frequency("programming"));
