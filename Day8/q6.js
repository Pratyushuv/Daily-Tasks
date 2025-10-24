function returnPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Login successfull");
    }, 3000);
  });
}

async function resolveProm() {
  try {
    const response = await returnPromise();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

resolveProm();
