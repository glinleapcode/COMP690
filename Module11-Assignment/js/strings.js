//STEP 1

// const yourName = prompt("Please enter your name: ");
// alert(`Your Name has length of ${yourName.length}`);

//STEP 2

// const yourName = prompt("Please enter your name: ");
// const index = prompt("Please enter an index: ");
// alert(`The letter at ${index} of your name is ${yourName.charAt(index)}`);

//STEP 3

// const firstName = prompt("Please enter your first name: ");
// const lastName = prompt("Please enter your last name:");
// alert(`Your name is: ${firstName + " " + lastName}`);

//STEP 4

// const text = "The quick brown fox jumps over the lazy dog";
// alert(`The index of "fox" is ${text.indexOf("fox")}`);

//STEP 5

// const text = "The quick brown fox jumps over the lazy fox”";
// alert(`The index of "fox" is ${text.lastIndexOf("fox")}`);

//STEP 6

// const text = "The quick brown fox jumped over the lazy dog";
// const yourName = prompt("Please enter your full name");
// alert(text.replace("the lazy dog", yourName));

//STEP 7

// const text = "The quick brown fox jumps over the lazy dog";
// const searchWord = prompt("Please enter a word to search the text: ");

// const index = text.indexOf(searchWord);

// if (index === -1) {
//   alert("Sorry we cannot find the word in the text");
// } else {
//   alert(`The word is found at index: ${index}`);
// }

//STEP 8

// const old_string = "The quick brown fox jumps over the lazy dog";
// const index = old_string.indexOf("the lazy dog");
// const new_string = old_string.slice(index);
// alert(new_string.toUpperCase());

//STEP 9

// const text = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ";
// alert(text.trim().toLowerCase());

//STEP 10

const text = "the quick brown fox jumps over the lazy dog";
const result = text.charAt(0).toUpperCase() + text.slice(1);
alert(result);
