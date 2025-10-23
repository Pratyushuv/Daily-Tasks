function WordCount(str: string): void {
  const words: string[] = str.split(" ");
  console.log(words.length);
}

WordCount("Hello World");
WordCount("This is a sample sentence.");
WordCount("Programming is fun!");
