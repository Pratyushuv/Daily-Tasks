// 2. Get All Permutations of a String. A permutation of a string is a rearrangement of its characters in all possible ways, where every character is used exactly once in each arrangement.

function permutation(str) {
  str = Array.from(new Set(str)).join("");
  console.log(str);
  let finalArray = [];
  let finalStr = "";
  const n = str.length;

  const fact = (n) => {
    let fac = 1;

    for (let i = 1; i <= n; i++) {
      fac = fac * i;
    }
    return fac;
  };

  const f = fact(n);
  console.log(f);

  while (finalArray.length < f) {
    for (let i = 0; i < n; i++) {
      const rand = Math.floor(Math.random() * n);
      if (!finalStr.includes(str[rand])) finalStr = finalStr + str[rand];
    }
    if (!finalArray.includes(finalStr) && finalStr.length === str.length)
      finalArray.push(finalStr);
    finalStr = "";
  }
  console.log(finalArray.sort());
}

permutation("kkddfacd");
