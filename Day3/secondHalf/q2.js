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

  let bcount = 1;

  let weeknumberarray = [];
  let details = [];
  let weeknumber = 0;
  const week = 4;
  const a = [];
  console.log(arr);
  const days = arr.map((d) => d.toString().slice(8, 10));
  const months = arr.map((d) => d.toString().slice(4, 7));
  for (let i = 0; i < days.length; i++) {
    weeknumber = obj[months[i]] * week;

    if (Number(days[i]) < 8) weeknumber = weeknumber + 1;
    if (Number(days[i]) >= 8 && Number(days) < 15) weeknumber = weeknumber + 2;
    if (Number(days[i]) >= 15 && Number(days) < 22) weeknumber = weeknumber + 3;
    if (Number(days[i]) >= 22) weeknumber = weeknumber + 4;

    // details.push({ weeknumber: weeknumber, birthdays: 1 });
    weeknumberarray.push(weeknumber);
  }
  console.log(weeknumberarray);

  for (let i = 0; i < weeknumberarray.length; i++) {
    for (let j = 0; j < weeknumberarray.length; j++) {
      if (i != j) {
        if (weeknumberarray[i] === weeknumberarray[j]) {
          bcount++;
        }
      }
    }
    details.push({ weeknumber: weeknumberarray[i], birthdays: bcount });
    bcount = 1;
  }

  console.log(details);
}

dateDetails([
  new Date(2025, 2, 8),
  new Date(2025, 2, 8),
  new Date(2025, 5, 23),
]);

//  if (Number(days) < 8)
//     if (Number(days) >= 8 && Number(days) < 15)
