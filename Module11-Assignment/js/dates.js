//STEP 1

// const Months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// let year = parseInt(prompt("Please enter a year in format(XXXX)"));
// if (!/^\d{4}$/.test(year)) {
//   throw new Error("Invalid year format. Please enter a year in format XXXX");
// }
// let month = parseInt(prompt("Please enter a month using number 1-12"));
// if (month < 1 || month > 12) {
//   throw new Error("Invalid Month. Please enter a month using number 1-12");
// }
// // month index 0-11, 2 means March, 0 means last day of February
// let lastDayOfPreviousMonth = new Date(year, month, 0);
// // get the Date of the last day and that is the total days in that month
// let daysInMonth = lastDayOfPreviousMonth.getDate();
// console.log(
//   `The total days in ${Months[month - 1]}, ${year}  is ${daysInMonth} days.`
// );

//STEP 2

// const Months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// let dateString = prompt("Please enter a date in format MM/DD/YYYY");
// let date = new Date(dateString);
// let month = date.getMonth(); // 0-11
// console.log(`The month of ${date.toDateString()} is ${Months[month]}`);

//STEP 3

// let dateString = prompt("Please enter a date in format MM/DD/YYYY");
// let date = new Date(dateString);
// let day = date.getDay();
// if (day == 6 || day == 0) {
//   console.log(`The day of ${date.toDateString()} is Weekend`);
// } else {
//   console.log(`The day of ${date.toDateString()} is Weekday`);
// }

//STEP 4

// const Days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// let today = new Date(); // get today's date
// let dayOfToday = today.getDay();
// console.log(dayOfToday);
// let dayOfYesterday = (dayOfToday - 1 + 7) % 7; // handle the case of Sunday
// console.log(
//   `Today ${today.toDateString()} is ${Days[dayOfToday]}, so yesterday is ${
//     Days[dayOfYesterday]
//   }`
// );

//STEP 5

// const Days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// let today = new Date(); // get today's date
// let dayOfToday = today.getDay();
// console.log(
//   `Today is ${today.toDateString()}, the day of today is ${Days[
//     dayOfToday
//   ].charAt(0)}`
// );
