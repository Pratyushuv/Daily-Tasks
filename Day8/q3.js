const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 2000);
});

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("Promise Completed");
  });
