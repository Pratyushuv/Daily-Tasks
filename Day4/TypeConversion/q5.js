function removeFalsey(arr) {
  //   console.log(arr);
  arr.forEach((a, i, arr) => {
    if (
      a === false ||
      a === 0 ||
      a === "" ||
      a === null ||
      a === undefined ||
      a === NaN
    )
      arr.splice(i);
  });
  console.log(arr);
}

arr = [false, 0, "", null, undefined, NaN];
removeFalsey(arr);
