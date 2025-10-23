function toUpper(arr: string[]): string[] {
  const upper: string[] = [];
  for (let i: number = 0; i < arr.length; i++) {
    upper.push(arr[i].toUpperCase());
  }
  return upper;
}

console.log(toUpper(["hi", "hello", "welcome", "pratyush"]));
