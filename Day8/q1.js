const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded");
  }, 2000);
});

myPromise.then((res) => {
  console.log(res);
});
