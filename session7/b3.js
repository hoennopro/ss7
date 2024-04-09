var WeekDays;
(function (WeekDays) {
  WeekDays["Monday"] = "Monday";
  WeekDays["Tuesday"] = "Tuesday";
  WeekDays["Wednesday"] = "Wednesday";
  WeekDays["Thursday"] = "Thursday";
  WeekDays["Friday"] = "Friday";
  WeekDays["Saturday"] = "Saturday";
  WeekDays["Sunday"] = "Sunday";
})(WeekDays || (WeekDays = {}));

console.log("Ngày trong tuần:");

Object.keys(WeekDays).forEach(function (key) {
  console.log(WeekDays[key]);
});
