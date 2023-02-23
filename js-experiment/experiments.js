"use strict";

// const monthlyRent = 500;

// const yearlyRent = monthlyRent * 12;
// console.log(yearlyRent);

// let skyIsBlue = true;

// if (2 + 2 === "4") {
//   console.log("The sky is blue!");
// } else {
//   console.log("The sky is not blue!");
// }

// let x = 0;
// while (x < 10) {
//   x++;
//   console.log("Incremented x!");
// }
// console.log(x);

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// const n = 10;
// const character = "😃";
// let sequence = "";

// for (let i = 0; i < n; i++) {
//   sequence += character;
// }

// console.log(sequence);

// console.log("".padStart(n, character));

// function bark() {
//   console.log("woof");
// }

// const meow = function () {
//   console.log("meeeow");
// };

// const chirp = () => {
//   console.log("chirp chirp");
// };

// bark();
// meow();
// chirp();

/**
 * Reference documentation:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 */
// const sentence = "ThiS HaS wEirD CaSINg";
// const lowerCaseSentence = sentence.toLowerCase();
// console.log(lowerCaseSentence);
// console.log(lowerCaseSentence.substring(5, 15));

// const num = 5.3;
// const roundNum = Math.round(num);
// const floorNum = Math.floor(num);
// const ceilNum = Math.ceil(num);
// console.log(roundNum);
// console.log(floorNum);
// console.log(ceilNum);

// const randNum = Math.random(); // between 0 and 1
// console.log(randNum);

// // Want to see if a string contains another string
// const testStringOne = "The cute quick brown fox jumps...";
// const testStringTwo = "Mirror, mirror on the wall...";
// const testStringThree = "execute";
// const stringToLookFor = "cute";

// console.log(testStringOne.includes(stringToLookFor));
// console.log(testStringTwo.includes(stringToLookFor));
// console.log(testStringThree.includes(stringToLookFor));

// How many milliseconds have elapsed since Jan 1st, 1970 (The Unix Epic)
// console.log(Date.now());

// const dog = {
//   name: "Luna",
//   speak() {
//     console.log("woof woof!");
//   },
// };
// dog.speak();

// const dog = {
//   name: "Luna",
//   speak: function () {
//     console.log("woof woof!");
//   },
// };
// dog.speak();

// const dog = {
//   name: "Luna",
//   print_name() {
//     console.log(this.name);
//   },
// };
// dog.print_name();

// Using class template
// class dog {
//   constructor(name, string) {
//     this.name = name;
//     this.string = string;
//   }
//   speak() {
//     console.log(this.string);
//   }
// }

// const dog1 = new dog("Luna", "woof woof");
// dog1.speak();

/**
 * Arrays
 * */

// const nums = [1, 2, 3, 4, 5];
// console.log(nums.length);
// console.log(nums.join(" | "));
// nums.push(6);
// console.log(nums);
// nums.pop();
// console.log(nums);
// nums.splice(2, 1); // removes third element
// console.log(nums);
// nums.shift();
// console.log(nums);

// const cities = [
//   "Seattle",
//   "San Francisco",
//   "Salt Lake City",
//   "Amsterdam",
//   "Hong Kong",
// ];

// // method 1
// for (let i = 0; i < cities.length; i++) {
//   console.log(cities[i]);
// }

// // method 2
// cities.forEach(function (city) {
//   console.log(city);
// });
