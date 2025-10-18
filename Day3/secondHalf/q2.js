function dateDetails(arr) {
  const obj = {
    Jan: "1",
    Feb: "2",
    Mar: "3",
    Apr: "4",
    May: "5",
    Jun: "6",
    Jul: "7",
    Aug: "8",
    Sep: "9",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };

  let details = [];
  let weekdays = 0;
  const week = 4;
  const a = [];
  console.log(arr);
  const days = arr.map((d) => d.toString().slice(8, 10));
  const months = arr.map((d) => d.toString().slice(4, 7));
  for (let i = 0; i < days.length; i++) {
    weekdays = obj[months[i]] * week;

    if (Number(days[i]) < 8) weekdays = weekdays + 1;
    if (Number(days[i]) >= 8 && Number(days) < 15) weekdays = weekdays + 2;
    if (Number(days[i]) >= 15 && Number(days) < 22) weekdays = weekdays + 3;
    if (Number(days[i]) >= 22) weekdays = weekdays + 4;
    details.push({ weekdays: weekdays, birthdays: 1 });
  }
  console.log(details);
}

dateDetails([
  new Date(2025, 0, 4),
  new Date(2025, 2, 8),
  new Date(2025, 5, 23),
]);

//  if (Number(days) < 8)
//     if (Number(days) >= 8 && Number(days) < 15)
