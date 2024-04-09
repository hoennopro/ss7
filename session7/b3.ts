enum WeekDays {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

console.log("Ngày trong tuần:");

Object.keys(WeekDays).forEach((key) => {
  console.log(WeekDays[key as keyof typeof WeekDays]);
});
