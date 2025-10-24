const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Network error");
  }, 1000);
});

myPromise.then((res) => console.log(res)).catch((err) => console.error(err));
