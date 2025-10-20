function daysBetween(date1, date2) {
  console.log((date2 - date1) / 1000 / 60 / 60 / 24);
}

daysBetween(new Date("2025-01-01"), new Date("2025-01-04"));
