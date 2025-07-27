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
    if (array3[i] % 2 ===0 ) {
        array3EvenA.push(array3[i]);
    }
}
// console.log(array3EvenA); 

//using filter function
const array3EvenB = array3.filter((num) => num % 2 ===0); 
// console.log(array3EvenB)


// ---

// ### **Section 2: Looping Through Arrays with Objects**  
// **Difficulty: Medium**  

// 4. **Access Object Properties**  
//    Given:  
 
const users = [{name: "Alice", age: 25}, {name: "Bob", age: 30}];

//    Loop through `users` and log each user’s name.  



// 5. **Find a Specific Object**  
//    Using the `users` array above, find and log the object where `name === "Bob"`.  



// 6. **Calculate Average Age**  
//    Loop through `users` and compute the average age.  

// 

// ### **Section 3: Built-in Loop Methods**  


// 7. **`forEach` Practice**  
//    Use `forEach` to log each element 
const myArray = ["apple", "banana", "cherry"]; 


// 8. **`map` Transformation**  
const thisArray = [1, 2, 3];
// use `map` to create a new array where each number is doubled. 


// 9. **`filter` with Condition**  
const grades =[15, 3, 25, 8, 10];

//use `filter` to keep numbers greater than 10.  



// 10. **`find` First Match**  
//     Use `find` to get the first number > 50 in 
// 
const finder = [20, 45, 60, 70]; 

// 11. **`reduce` for Aggregation**  
//     Use `reduce` to multiply all numbers in `[2, 3, 4]` (result: `24`).  

// ---

// ### **Section 4: String Manipulation**  
// **Difficulty: Mixed**  

// 12. **Slice a String**  
    // Slice `"JavaScript"` to extract `"Script"`.  

    const string1 = "JavaScript";

// 13. **Split and Join**  
//     Split `"hello-world"` into an array by `-`, then join back with `_`.
// intended output: "hello_world"

const splitString = "hello-world"

// 14. **Uppercase Transformation**  
//     Convert `"example"` to uppercase using a string method.  

let transform = "example";

// 15. **Check Substring**  
//     Check if `"programming"` contains `"gram"` and log `true` or `false`.  

 let spellCheck = "programming"


// ### **Section 5: Array Transformations with Functions**  
// 

// 16. **Apply Function to Array**
//   Apply `addTwo` to each element in `[3, 6, 9]` using `map`.   

const addTwo = num => num + 2;

let myNums = [3, 6, 9];

 

// 17. **Custom Filter Function**  
//     Write a function `isLongWord(word)` that returns `true` if `word.length > 5`.  
//     Use it to filter myFruits 
const myFruit = ["apple", "banana", "kiwi"];  

// 18. **Chaining Methods**  
//    Chain `map` (multiply by 3) and `filter` (keep even numbers).  

let myNums2 = [1, 2, 3, 4];



// ### **Section 6: Mixed Challenges**  

// 19. **Nested Object Access**  
//     Given:  
   
const data = [{id: 1, items: ["baseball", "soccer ball"]},   {id: 2, items: ["Game Boy"]}];

//     Log all `items` for each object.  


// 20. **Count String Occurrences**  
//     Loop through mixedLetters  and count how many times "a" appears.  
const mixedLetters = ["a", "b", "a", "c"];

// 21. **Flatten an Array**  
//     Use `reduce` or loops to flatten the array flat into `[1, 2, 3, 4]; 

const flat = [[1, 2], [3, 4]];

// 22. **Sort and Reverse**  
//     Sort `ages` in ascending order, then reverse it.  
const ages = [10, 2, 5, 8];

// 23. **Extract Object Keys**  
//     Given `member1`, loop through its keys and log them.  
const member1 = {name: "Tom", age: 28};

// 24. **Merge Arrays**  
//     Merge `firstArray` and `secondArray` into one array using a loop or method.  
let firstArray = [1, 2];
let secondArray = [3, 4];



