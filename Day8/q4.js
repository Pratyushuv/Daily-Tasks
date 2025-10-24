const myPromise = new Promise((resolve, reject) => {
  resolve(5);
});

myPromise
  .then((res) => {
    return res;
  })
  .then((res) => {
    return res * 2;
  })
  .then((res) => {
    return res + 10;
  })
  .then((res) => {
    console.log(res);
  });
