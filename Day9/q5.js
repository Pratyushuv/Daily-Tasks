function countDown(date) {
  const now = new Date().getMilliseconds();
  console.log(date);
  console.log(now);
}

countDown(new Date("2025-10-26").getMilliseconds());
