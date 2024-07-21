// Create a function that reverses an array.Start small here and work your way up.Begin with an array of 5 numbers,
//  and then try your program with a larger array to verify its success.

// function reverseArray() {
//   let arr = ["1", "2", "3", "4", "5"];
//   console.log(arr);
//   let reverse = arr.reverse();
//   console.log(reverse);
// }

// reverseArray();

// Create a function that filters out negative numbers. In this challenge,
// you’ll have a function that takes an array as an input and returns an array.
// But if all goes according to plan, it’ll remove the negative numbers.
// This is another example of a task that’ll be useful when combing through data and looking for clever ways to eliminate “bad data.”

// function negativeNum() {
//   let arr = [];
//   for (let i = 0; i <= 5; i++) {
//     let userInput = +prompt("Enter Any Number:");
//     if (userInput === '') {
//         alert("Input Field is empty")
//     }
//     else if (userInput > 0) {
//       alert("Number is positive");

//     } else if (userInput < 0) {
//       alert("Number is negative");
//       arr.push(userInput);
//       console.log(arr);
//     } else if (userInput === 0) {
//       alert("Number is zero");
//     }
//   }
// }

// negativeNum();

// Return the number of vowels in a string. Create a function that’ll return an integer of
// the number of vowels found in a string. This is a great way to practice determining the features of a dataset.
// If you use JavaScript later in your career, you’ll be well-prepared to determine what datasets (or just strings) consist of.

// function vowels() {
//   let string = prompt("Enter Something");
//   let vowels = ["a", "e", "i", "o", "u"];
//   console.log()
// }
// vowels();

// Write a JavaScript program to check whether two given integer values are in the range 50 - 99 (inclusive). Return true if either of them falls within the range.

// let int1 = +prompt("Enter first Number");
// let int2 = +prompt("Enter second Number");
// if ((int1 > 50 && int1 < 90) && (int2 > 50 && int2 < 90)) {
//   alert("Both of them lies in range");
// } else if ((int1 > 50 && int1 < 90) || (int2 > 50 && int2 < 90)) {
//   alert("Each of them lies in range");
// } else {
//   alert("Numbers not in range");
// }

// Write a JavaScript program to create an updated string of 4 copies of the last 3 characters of a given original string. The string length must be 3 and above.

// let string = "Hello Saylani";
// console.log("String is", string);
// // Copy 1
// let copyString = string.slice(string.length-3,string.length);
// let replaceString = "ANI"
// let updatedString = string.replace(copyString,replaceString);
// console.log("UpdatedString Copy 1",updatedString);
// // Copy 2
// let copyString1 = string.slice(string.length-3,string.length);
// let replaceString1 = "ASD"
// let updatedString1 = string.replace(copyString1,replaceString1);
// console.log("UpdatedString Copy 2",updatedString1);
// // Copy 3
// let copyString2 = string.slice(string.length-3,string.length);
// let replaceString2 = "QWE"
// let updatedString2 = string.replace(copyString2,replaceString2);
// console.log("UpdatedString Copy 3",updatedString2);
// // Copy 4
// let copyString3 = string.slice(string.length-3,string.length);
// let replaceString3 = "ZXC"
// let updatedString3 = string.replace(copyString3,replaceString3);
// console.log("UpdatedString Copy 4",updatedString3);

// Write a JavaScript program to find the types of a given angle.
//  Acute angle: An angle between 0 and 90 degrees.
//  Right angle: An 90 degree angle.
//  Obtuse angle: An angle between 90 and 180 degrees.
//  Straight angle: A 180 degree angle.

// let angle = +prompt("Enter Angle Value");
// if ((angle > 0) && (angle < 90) ) {
//     alert("Type of given angle is Acute");
// }
// else if (angle === 90 ) {
//     alert("Type of given angle is Right");
// }
// else if ((angle > 90) && (angle < 180) ) {
//     alert("Type of given angle is Obtuse");
// }
// else if (angle === 180 ) {
//     alert("Type of given angle is Straight");
// }

// Write a JavaScript program to find the smallest round number not less than a given value.
// Note: A round number is informally considered to be an integer that ends with one or more zeros.
//  So, 590 is rounder than 592, but 590 is less round than 600.

let number = 590.56;
let roundNumber = Math.round(number);
console.log(roundNumber)
