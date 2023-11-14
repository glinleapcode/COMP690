//STEP 1
// const favoriteMovies = [
//   "The Shawshank Redemption",
//   "Forrest Gump",
//   "Gladiator",
//   "Spirited Away",
//   "Life Is Beautiful",
// ];

// console.log(favoriteMovies[1]);

//STEP 2

// const favoriteMovies = [
//   "The Shawshank Redemption",
//   "Forrest Gump",
//   "Gladiator",
//   "Spirited Away",
//   "Life Is Beautiful",
// ];

// const movies = new Array(5);

// Method 1: forEach
// favoriteMovies.forEach((movie, index) => {
//   movies[index] = movie;
// });
// console.log(movies[0]);

// Method 2: for of loop
// for (let [i, movie] of favoriteMovies.entries()) {
//   movies[i] = movie;
// }
// console.log(movies[0]);

//STEP 3

// const favoriteMovies = [
//   "The Shawshank Redemption",
//   "Forrest Gump",
//   "Gladiator",
//   "Spirited Away",
//   "Life Is Beautiful",
// ];

// const movies = new Array(5);

// favoriteMovies.forEach((movie, index) => {
//   movies[index] = movie;
// });

// // insert at position 3rd.
// // splice(startIndex, deleteCount, elementToInsert)
// movies.splice(2, 0, "The Matrix");
// console.log(movies);
// console.log(movies.length);

//STEP 4

// const favoriteMovies = [
//   "The Shawshank Redemption",
//   "Forrest Gump",
//   "Gladiator",
//   "Spirited Away",
//   "Life Is Beautiful",
// ];

// const movies = [];
// favoriteMovies.forEach((movie, index) => {
//   movies[index] = movie;
// });
// console.log(movies);
// delete movies[0];
// console.log(movies);

//STEP 5

// const favoriteMovies = [
//   "The Shawshank Redemption",
//   "Forrest Gump",
//   "Gladiator",
//   "Spirited Away",
//   "Life Is Beautiful",
//   "The Lion King",
//   "Braveheart",
// ];

// const movies = [];
// favoriteMovies.forEach((movie, index) => {
//   movies[index] = movie;
// });

// for (let index in movies) {
//   console.log(movies[index]);
// }

//STEP 6
// const favoriteMovies = [
//   "The Shawshank Redemption",
//   "Forrest Gump",
//   "Gladiator",
//   "Spirited Away",
//   "Life Is Beautiful",
//   "The Lion King",
//   "Braveheart",
// ];

// const movies = [];
// favoriteMovies.forEach((movie, index) => {
//   movies[index] = movie;
// });

// for (let movie of movies) {
//   console.log(movie);
// }

//STEP 7

// const favoriteMovies = [
//   "The Shawshank Redemption",
//   "Forrest Gump",
//   "Gladiator",
//   "Spirited Away",
//   "Life Is Beautiful",
//   "The Lion King",
//   "Braveheart",
// ];

// const movies = [];
// favoriteMovies.forEach((movie, index) => {
//   movies[index] = movie;
// });

// for (let movie of movies.sort()) {
//   console.log(movie);
// }

//STEP 8

// const favoriteMovies = [
//   "The Shawshank Redemption",
//   "Forrest Gump",
//   "Gladiator",
//   "Spirited Away",
//   "Life Is Beautiful",
//   "The Lion King",
//   "Braveheart",
// ];

// const movies = [];
// favoriteMovies.forEach((movie, index) => {
//   movies[index] = movie;
// });

// const leastFavMovies = ["Time Changer", " Jack and Jill", "Scream"];

// console.log("Movies I like: \n\n");

// for (let movie of movies) {
//   console.log(movie);
// }

// console.log("\n\n");

// console.log("Movies I regret watching: \n\n");
// for (let movie of leastFavMovies) {
//   console.log(movie);
// }

//STEP 9

// const favoriteMovies = [
//   "The Shawshank Redemption",
//   "Forrest Gump",
//   "Gladiator",
//   "Spirited Away",
//   "Life Is Beautiful",
//   "The Lion King",
//   "Braveheart",
// ];

// const leastFavMovies = ["Time Changer", "Jack and Jill", "Scream"];
// const movies = favoriteMovies.concat(leastFavMovies);
// console.log(movies);
// console.log(movies.reverse());

//STEP 10

// const favoriteMovies = [
//   "The Shawshank Redemption",
//   "Forrest Gump",
//   "Gladiator",
//   "Spirited Away",
//   "Life Is Beautiful",
//   "The Lion King",
//   "Braveheart",
// ];

// const leastFavMovies = ["Time Changer", "Jack and Jill", "Scream"];
// const movies = favoriteMovies.concat(leastFavMovies);
// console.log(movies);
// console.log(movies.reverse());
// const lastMovie = movies.slice(-1)[0]; // method1
// // const lastMovie2 = movies[movies.length - 1]; // method2
// // const lastMovie3 = movies.at(-1); // method3
// console.log(lastMovie);
// // console.log(lastMovie2);
// // console.log(lastMovie3);

//STEP 11

// const favoriteMovies = [
//   "The Shawshank Redemption",
//   "Forrest Gump",
//   "Gladiator",
//   "Spirited Away",
//   "Life Is Beautiful",
//   "The Lion King",
//   "Braveheart",
// ];

// const leastFavMovies = ["Time Changer", "Jack and Jill", "Scream"];
// const movies = favoriteMovies.concat(leastFavMovies);
// console.log(movies);
// console.log(movies.reverse());
// const firstMovie = movies[0];
// console.log(firstMovie);

//STEP 12

// const favoriteMovies = [
//   "The Shawshank Redemption",
//   "Forrest Gump",
//   "Gladiator",
//   "Spirited Away",
//   "Life Is Beautiful",
//   "The Lion King",
//   "Braveheart",
// ];

// const leastFavMovies = ["Time Changer", "Jack and Jill", "Scream"];
// const movies = [...favoriteMovies, ...leastFavMovies];

// const newFavMovies = ["Zootopia", "Despicable Me", "Inside Out"];
// leastFavMovies.forEach((leastFavMovie, index) => {
//   let loc = movies.indexOf(leastFavMovie);
//   movies[loc] = newFavMovies[index];
// });
// console.log(movies);

//STEP 13

const movies = [
  ["The Shawshank Redemption", 1],
  ["Forrest Gump", 2],
  ["Gladiator", 3],
  ["Spirited Away", 4],
  ["Life Is Beautiful", 5],
];

// method 1: use filter()

let movieNames = movies
  .filter((movie) => {
    return typeof movie[0] === "string";
  })
  .map((movie) => movie[0]);
console.log(movieNames);

// method 2: we can just use map()
// let moviesNames = movies.map(([movieName, rank]) => {
//   return movieName;
// });
// console.log(moviesNames);

//STEP 14

// let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];
// const showEmployee = function (employees) {
//   console.log("Employees: \n\n");
//   employees.forEach((employee) => {
//     console.log(`${employee} \n`);
//   });
// };
// showEmployee(employees);

//STEP 15

function filterValues(arr) {
  return arr.filter((item) => {
    return item !== false && item !== null && item !== 0 && item !== "";
  });
}

let res = filterValues([58, "", "abcd", true, null, false, 0]);
console.log(res);

//STEP 16

function getRandomItem(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

console.log(getRandomItem([33, 44, 69, 87, 25]));

//STEP 17

// method 1
// function getMaxNumber(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// method 2: use reduce

function getMaxNumber(arr) {
  return arr.reduce((curMax, cur) => {
    if (cur > curMax) {
      return cur;
    }
    return curMax;
  }, arr[0]);
}

console.log(getMaxNumber([33, 94, 69, 87, 25]));
