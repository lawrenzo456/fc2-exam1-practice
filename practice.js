// JavaScript Basics Practice Exam
// Focus Areas:  Looping through arrays & objects, built-in loop methods,
//  string manipulation, array transformations
// ---

// ### **Section 1: Looping Through Arrays**

// 1. **Simple Array Loop**
//    Write a `for` loop that logs each element of the array `[5, 10, 15, 20]` to the console.
const array1 = [5, 10, 15, 20];
for (let i = 0; i < array1.length; i++) {
  // console.log(array1[i]);
}

// 2. **Summing Array Elements**
//    Use a loop to calculate the sum of all numbers in `[1, 2, 3, 4, 5]` and log the result.
const array2 = [1, 2, 3, 4, 5];
let sum = array2[0];
for (let i = 1; i < array2.length; i++) {
  sum += array2[i];
}
// console.log(sum);

// 3. **Filter Even Numbers**
//    Loop through `[12, 7, 9, 24, 18]` and create a new array containing only even numbers.

const array3 = [12, 7, 9, 24, 18];
const array3EvenA = [];
// let array3EvenB = [];

// using for loop
for (let i = 0; i < array3.length; i++) {
  if (array3[i] % 2 === 0) {
    array3EvenA.push(array3[i]);
  }
}
// console.log(array3EvenA);

//using filter function
const array3EvenB = array3.filter((num) => num % 2 === 0);
// console.log(array3EvenB)

// ---

// ### **Section 2: Looping Through Arrays with Objects**
// **Difficulty: Medium**

// 4. **Access Object Properties**
//    Given:

const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
];

//    Loop through `users` and log each user’s name.
for (let index in users) {
  // console.log(users[index].name);
}

// 5. **Find a Specific Object**
//    Using the `users` array above, find and log the object where `name === "Bob"`.
for (let i = 0; i < users.length; i++) {
  if (users[i].name === 'Bob') {
    // console.log(users[i]);
  }
}

// 6. **Calculate Average Age**
//    Loop through `users` and compute the average age.
let userAverageAge = 0;
for (let index in users) {
  userAverageAge += users[index].age;
  // console.log(userAverageAge)
}
userAverageAge /= users.length;
// console.log(userAverageAge)
//

// ### **Section 3: Built-in Loop Methods**

// 7. **`forEach` Practice**
//    Use `forEach` to log each element
const myArray = ['apple', 'banana', 'cherry'];

for (let fruit in myArray) {
  // console.log(myArray[fruit]);
}

// 8. **`map` Transformation**
const thisArray = [1, 2, 3];
// use `map` to create a new array where each number is doubled.
const mapArray = thisArray.map((x) => x * 2);
// console.log(mapArray);

// 9. **`filter` with Condition**
const grades = [15, 3, 25, 8, 10];

//use `filter` to keep numbers greater than 10.
const overTen = grades.filter((grade) => grade > 10);
// console.log(overTen);

// 10. **`find` First Match**
//     Use `find` to get the first number > 50 in
//
const finder = [20, 45, 60, 70];
const found10 = finder.find((num) => num > 50);
// console.log(found10);

// 11. **`reduce` for Aggregation**
//     Use `reduce` to multiply all numbers in `[2, 3, 4]` (result: `24`).
//reduce method reduces the elements of an array to a single value
const array11 = [2, 3, 4];
// let initialValue = array11[0];

function product(accumulator, element) {
  //previousElement, nextElement, we're returning the previous element * the next element
  return accumulator * element;
}
// console.log(product11);

const array11Product = array11.reduce((product, currentElement) => {
  //current element refers to each value IN the array, accumulator is the stored value to be returned
  return product * currentElement;
}, 1);
//the second argument to the reduce method is the initial value of the first parameter (product);
// console.log(array11Product);

//but by excluding the initial value  element in the argument, it sets that value to the first element of the array, so /*
/* const array11Product= array11.reduce((product, currentElement)=> { //current element refers to each value IN the array, accumulator is the stored value to be returned
return product * currentElement;
});  would have product as 2
*/
/* cleaner:  const array11Product= array11.reduce((product, currentElement)=>  product * currentElement); //current element refers to each value IN the array, accumulator is the stored value to be returned
 */

// ---

// ### **Section 4: String Manipulation**
// **Difficulty: Mixed**

// 12. **Slice a String**
// Slice `"JavaScript"` to extract `"Script"`.

const string1 = 'JavaScript';
const string2 = string1.slice(4, string1.length); //index as the first parameter in slice KEEPS that letter
// console.log(string2)

// 13. **Split and Join**
//     Split `"hello-world"` into an array by `-`, then join back with `_`.
// intended output: "hello_world"

let splitString = 'hello-world';
splitString = splitString.split(`-`); //splits the string into an array with the elements separated by the included argument
// console.log(splitString)
splitString = splitString.join('_'); //creates and returns a new string using the argument submitted, and if no argument is included, it'll default to a ","
// console.log(splitString)

// 14. **Uppercase Transformation**
//     Convert `"example"` to uppercase using a string method.

let transform = 'example';
// transform = transform.toUpperCase();
// console.log(transform);
let t = transform.charAt(0).toUpperCase();
transform = transform.slice(1, transform.length);
transform = t + transform;

// console.log(transform)

// 15. **Check Substring**
//     Check if `"programming"` contains `"gram"` and log `true` or `false`.

let spellCheck = 'programming';
//uses includes method; includes checks if a string contains a substring
//  let substring = "gram";
if (spellCheck.includes('gram')) {
  // console.log(true);
}
//  else (console.log(false));

// ### **Section 5: Array Transformations with Functions**
//

// 16. **Apply Function to Array**
//   Apply `addTwo` to each element in `[3, 6, 9]` using `map`.
//map allows you to copy one array to a new array with an argument taht applies adjustments to the copy VS forEach changes the original array
//you pass in a function without parentheses
const addTwo = (num) => num + 2; //is a function

const myNums = [3, 6, 9];
const myNumsPlusTwo = myNums.map(addTwo);
// console.log(myNumsPlusTwo)

// 17. **Custom Filter Function**
//     Write a function `isLongWord(word)` that returns `true` if `word.length > 5`.
//     Use it to filter myFruits
const myFruit = ['apple', 'banana', 'kiwi', 'pineapple'];

// function isLongWord(word) {
//     if (word.length > 5) {
//         return true;
//     }
// }
const isLongWord = (word) => word.length > 5;

const filteredFruit = myFruit.filter((word) => isLongWord(word));
// console.log(filteredFruit)
// if (isLongWord("apple")) {
//     console.log ("egg")
// }
// else {console.log("pain")}

// 18. **Chaining Methods**
//    Chain `map` (multiply by 3) and `filter` (keep even numbers).

let myNums2 = [1, 2, 3, 4];
const timesThree = (num) => num * 3;
const keepEven = (num) => num % 2 === 0;
const myNums2byThree = myNums2.map(timesThree);
let myNumsKeepEven = myNums2byThree.filter(keepEven);

// console.log(myNums2byThree)
// console.log(myNumsKeepEven);
// console.log(myNums2.filter(keepEven));

// ### **Section 6: Mixed Challenges**

// 19. **Nested Object Access**
//     Given:

const data = [
  { id: 1, items: ['baseball', 'soccer ball'] },
  { id: 2, items: ['Game Boy'] },
];

//     Log all `items` for each object.
for (let item in data) {
  // console.log(data[item].items)
}

// 20. **Count String Occurrences**
//     Loop through mixedLetters  and count how many times "a" appears.
const mixedLetters = ['a', 'b', 'a', 'c'];
// }
function countLetters(array, letter) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === letter) {
      count++;
    }
  }
  return count;
}

// const countLetters = (array, letter) => {
//     count = array.map((letter) => letter === letter);
//     console.log(count)
//     // return count;
// }

// console.log(countLetters(mixedLetters, "a"));

// 21. **Flatten an Array**
//     Use `reduce` or loops to flatten the array flat into `[1, 2, 3, 4];

const flat = [
  [1, 2],
  [3, 4],
];

let flatten = [];
// for (let num in flat) {
//     flatten.push(num);
// }
for (let i = 0; i < flat.length; i++) {
  for (let j = 0; j < flat[i].length; j++) {
    flatten.push(flat[i][j]);
  }
}
// console.log(flatten)
// 22. **Sort and Reverse**
//     Sort `ages` in ascending order, then reverse it.
const ages = [10, 2, 5, 8];
//https://www.w3schools.com/jsref/jsref_sort.asp
// console.log(ages.sort(function (a, b) { return (a-b)}));
// console.log(ages.sort(function (a, b) { return (b-a)}));

// 23. **Extract Object Keys**
//     Given `member1`, loop through its keys and log them.
const member1 = { name: 'Tom', age: 28 };

// for (let name in member1) {
//     console.log(Object.keys(member1));
// }
// console.log(Object.keys(member1))

// 24. **Merge Arrays**
//     Merge `firstArray` and `secondArray` into one array using a loop or method.

//concat method is applied to one array then takes in another array as an argumetn and combines them
let firstArray = [1, 2];
let secondArray = [3, 4];

const newArray = firstArray.concat(secondArray);
// console.log(newArray);
