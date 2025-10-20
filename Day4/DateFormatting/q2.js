const date = new Date();
const d1 = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "long",
  timeZone: "Asia/Kolkata",
}).format(date);
console.log(d1);

const d2 = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "long",
  timeZone: "America/New_York",
}).format(date);
console.log(d2);
