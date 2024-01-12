// STEP 1

// // Named class
// function Cat(name, color, breed) {
//   this.name = name;
//   this.color = color;
//   this.breed = breed;
// }

// // Anonymous class
// const Dog = function (name, color, breed) {
//   this.name = name;
//   this.color = color;
//   this.breed = breed;
// };

// STEP 2

// const cat = new Cat("Nixon", "White", "Bengal");
// const dog = new Dog("Coco", "Brown", "Poodle");

// STEP 3

// function Animal() {
//   this.displayMessage = function () {
//     console.log("The Animal has been created.");
//   };
// }

// const animalTwo = new Animal();
// animalTwo.displayMessage();

// STEP 4

// function Animal(message) {
//   this.message = message;
//   this.displayMessage = function () {
//     console.log(message);
//   };
// }

// const animal = new Animal("The Animal has been created.");
// console.log(animal.message);

// STEP 5

// function Animal(type, breed, color, height, length) {
//   this.type = type;
//   this.breed = breed;
//   this.color = color;
//   this.height = height;
//   this.length = length;
// }

// STEP 6

// const animal = new Animal("Dog", "Poodle", "Brown", "15", "20");
// for (const property in animal) {
//   console.log(property);
// }

// STEP 7

// Animal.prototype.speak = function () {
//   const type = this.type.toLowerCase();
//   if (type === "dog") {
//     console.log(`The ${this.color} dog is barking!`);
//   } else if (type === "cat") {
//     console.log(`The ${this.color} cat is meowing!`);
//   }
// };

// const animal2 = new Animal("Cat", "Bengal", "White", "10", "15");
// animal2.speak();

// STEP 8

// function Animal(type, breed, color, height, length) {
//   this._type = type;
//   this._breed = breed;
//   this._color = color;
//   this._height = height;
//   this._length = length;

//   this._checkType = function () {
//     const type = this._type.toLowerCase();
//     if (type === "dog") {
//       return "dog";
//     } else {
//       return "cat";
//     }
//   };

//   this.speak = function () {
//     const type = this._checkType();
//     console.log(`The ${type} has made a noise!`);
//   };
// }

// const animal = new Animal("Cat", "Poodle", "Brown", "15", "20");
// animal.speak();

// STEP 9

// String.prototype.findWords = function (target) {
//   // Split the string into an array of words by whitespace
//   const words = this.split(/\s+/);
//   let count = 0;
//   for (let word of words) {
//     if (word.toLowerCase() === target.toLowerCase()) {
//       count++;
//     }
//   }
//   alert(`The word "${target}" was found ${count} times in Text: ${this}`);
// };

// const text = "The quick brown fox jumps over the lazy dog";
// console.log(text.findWords("the"));
