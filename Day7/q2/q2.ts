function greet(name: string, greet: string = "hello"): string {
  return greet + " " + name;
}

console.log(greet("pratyush", "hi"));
