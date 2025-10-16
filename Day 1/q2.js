// 2. Write a program that takes a sentence as input and returns the word count.

function wordCount(str) {
  const words = str.split(" ");
  console.log(words.length);
}

wordCount("Hello World");
wordCount("This is a sample sentence.");
wordCount("Programming is fun!");
