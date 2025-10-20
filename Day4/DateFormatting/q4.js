function FormatTimeZone(date, zone) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    timeZone: `${zone}`,
  }).format(date);

  console.log(formattedDate);
}

FormatTimeZone(new Date(25, 1, 1), "Asia/Kolkata");
