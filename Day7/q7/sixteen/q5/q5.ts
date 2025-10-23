function IsAnagram(word1: string, word2: string): boolean {
  const letters1: string[] = word1.split("");
  const letters2: string[] = word2.split("");
  const sorted1: string[] = letters1.sort();
  const sorted2: string[] = letters2.sort();

  for (let i: number = 0; i < sorted1.length; i++) {
    if (sorted1[i] != sorted2[i]) {
      return false;
    }
  }
  return true;
}

console.log(IsAnagram("silent", "Listen"));
console.log(IsAnagram("restful", "fluster"));
console.log(IsAnagram("hello", "world"));
