// 16. Write a program that takes a list of strings as input and returns the list sorted based on the length of the strings, with shorter strings appearing first. If two strings have the same length, maintain their relative order.

function sortedStrings(str) {
  let st = str;
  let temp;
  const n = str.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (st[j].length > st[j + 1].length) {
        temp = st[j];
        st[j] = st[j + 1];
        st[j + 1] = temp;
      }
    }
  }

  console.log(st);
}

sortedStrings(["open", "source", "programming", "is", "fun"]);
sortedStrings(["hello", "world"]);
sortedStrings(["cat", "dog", "elephant", "tiger"]);
