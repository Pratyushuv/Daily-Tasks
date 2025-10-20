const currentDate = new Date();

const formattedDate = new Intl.DateTimeFormat("en-US", {
  dateStyle: "long",
  timeStyle: "short",
}).format(currentDate);
console.log(formattedDate);
