//STEP 1

// function stringInAlphabeticalOrder(str) {
//   // sortedStr = str.split("").sort().join("");
//   let chars = str.split("");
//   sortedChars = chars.sort();
//   sortedStr = sortedChars.join("");
//   return sortedStr;
// }

// console.log(stringInAlphabeticalOrder("webmaster"));

//STEP 2

// function capitalizeEachWord(str) {
//   let words = str.split(" ");
//   let capitalizedWords = [];
//   for (let word of words) {
//     capitalizedWords.push(word.charAt(0).toUpperCase() + word.slice(1));
//   }
//   return capitalizedWords.join(" ");
// }

// console.log(capitalizeEachWord("the quick brown fox"));

//STEP 3

// function countVowels(str) {
//   let vowels = "aeiouAEIOU";
//   count = 0;
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count += 1;
//     }
//   }
//   return count;
// }

// console.log(countVowels("The quick brown fox"));

//STEP 4

// function generateRandomString(id) {
//   let charMap =
//     "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let randomString = "";
//   for (let i = 0; i < id; i++) {
//     randomChar = charMap.charAt(Math.floor(Math.random() * charMap.length));
//     randomString += randomChar;
//   }
//   return randomString;
// }

// console.log(generateRandomString(8));

//STEP 5

function longestCountryName(countries) {
  let maxLen = 0;
  let maxIndex = -1;
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i].length);
    if (countries[i].length > maxLen) {
      maxLen = countries[i].length;
      maxIndex = i;
    }
  }
  return countries[maxIndex];
}

const countries = ["Astralia", "Germany", "United States of America"];
console.log(longestCountryName(countries));
