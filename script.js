// 1. Variables and operators

// Var - used before ES6 (2015) - never use!!!
var name = "Didi";

// Let
let age = 21;
age = 23;
// age = "Didi"; - JS allows assigning values of different data types to the variables, so be careful!!!
console.log("Stefko is too old: " + age);

// Const
const someValue = 23; // Fetch data from backend
console.log("Const: " + someValue);

// Operators
// >=, <=, ==, ===, !=, !==, &&, ||, !, +, -, *, /

const a = "5";
const b = 5;

console.log(a == b); // only value
console.log(a === b); // value + data type - if possible, always use '==='

console.log(a != b); // only value
console.log(a !== b); // value + data type - if possible, always use '!=='

let result = "5" + 5; // Concatenation - when one of the operands is string, concatenation is performed
console.log(result, typeof result);

result = +"5" + 5; // Here, arithmetic operation is performed because "+" before "5" casts the number to integer
console.log(result, typeof result);

result = Number("5") + 5; // Here, arithmetic operation is performed because Number("5") casts the number to integer
console.log(result, typeof result);

result = Number("abc") + 5; // Here, we will see NaN - not a number, because we try to cast string to integer which is not possible in this scenario
console.log(result, typeof result);

result = "5" - 5; // Here, arithmetic operation is performed because "-" is an arithmetic operation only and JS will try to convert the string to integer which is successful in this scenario
console.log(result, typeof result);

result = "5a" - 5; // Here, we will see NaN - not a number, because we try to cast string to integer which is not possible in this scenario
console.log(result, typeof result);

// 2. Data Types and Conditionals

// Data Types

// Number (-2^53 - 2^53 - 1)
const num = 1;

// BigInt - very large numbers, primarily used for cryptographic algorithms
const largeNum = 1n;

// Boolean - true or false
const prime = (2 > 3 || 3 < 1) && 3 > 2;

// String - "", '', ``
const text1 = "Didi";
const text2 = "Didi";
const primeResult = `Prime is ${prime}`; // Interpolation
console.log(primeResult);

// Objects and symbols (symbols are unique identifiers for objects - very rarely used)
const didi = {
  name: "Didi",
  age: 18,
  "resource.characteristic.width-aggregation-sum": 1500,
};

console.log(`${didi.name} is ${didi["age"]}`);

for (const key in didi) {
  // if name, then didi["name"]
  console.log(`${key}: ${didi[key]}`);
}

const keys = Object.keys(didi); // string[]

for (let i = 0; i < keys.length; i++) {
  const element = keys[i];
  console.log("In for loop: " + element);
}

// Null - if something does not have a value
const nullValue = null;

// Undefined - if value is not assigned
let undefineValue;
console.log(undefineValue);

// Conditionals

// Logical operators - &&, ||, !
// Comparison operators - ==, ===, !=, !==, >=, <=

const expression = 5 > 3 && 5 < 3;

if (expression) {
  console.log("True");
} else {
  console.log("False");
}

// Truthy and falsy

// Truthy - 10, "Hello", { age: 21 }, [1, 2, 3], true
// Falsy - 0, "", undefined, null, false

let falsyObj = null;

if (falsyObj) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

falsyObj = { name: "Didi" };

if (falsyObj) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

let emptyStr = "";

if (emptyStr) {
  console.log("Non-empty string");
} else {
  console.log("Empty string");
}

// Call from backend
let data = null;

// Nullable operator
console.log(data?.name); // Take into account when working with real data as response might be delayed and initial value could be null/undefined

if (data) {
  console.log(data.name);
} else {
  console.log("No value");
}

// <boolean_expression> ? if true : if false
console.log(5 > 3 ? "Ternary yes" : "Ternary no");

// Functions

// Classic
function sum(a, b) {
  return a + b;
}

const sumResult = sum(3, 5);
console.log("Sum: " + sumResult);

// Arrow functions (Optional)
const arrowSum = (a, b) => {
  return a + b;
};

console.log("Arrow sum: " + arrowSum(4, 5));

function scopeFunc() {
  let variable = 3;
}

// console.log(variable); - will throw an error because this variable is not defined in the current scope

// Errors

// Type Errors
// const reference = null;
// console.log(reference.name); - Trying to access null value

// Syntax Errors
// let sdf-dfd = 3; - Invalid JS syntax

// Reference Errors
// console.log(notExistingVar); - When variable is not declared

// Problem solving

// Understand the problem - our onboarding process should allow users to register and to create their own organizations + allow users to invite other users
// What is the expected behavior - where is the entrypoint, where should user be redirected

// Prepare a plan
// what flows/scenarios should be supported, what will be the user input, where do we store information in DB, what will be the output

// Pilot implementation, PoC (Proof of Concept), pseudocode - how to implement with programming language and/or framework/library (Angular, React, .NET)
// Implement registration - use external provider (research)
// Implement user onboarding - first step - personal information; second step - preferences - language, timezone, third step - data storage location
// Implement organization onboarding
// Redirect to dashboard
// Leave organization - if users do not have more organizations, they should have access only to profile page

// Loops
for (let i = 0; i < 5; i++) {
  console.log("Loop: " + i);
}

let forInExampleObj = {
  name: "Didi",
  age: 18,
};

for (const key in forInExampleObj) {
  console.log("For-in: " + key);
} // For traversing keys of objects

const arrForOf = ["Didi", "Stefko", "=", "Love"];

for (const value of arrForOf) {
  console.log("For-of: " + value);
} // foreach in C#

let whileIndex = 0;

while (whileIndex < 3) {
  console.log("While: " + whileIndex);
  whileIndex++;
}

let doWhileIndex = 0;

do {
  console.log(`Do-while: ${doWhileIndex++}`);
} while (doWhileIndex < 3);

// Arrays
let nums = [1, 2, 3];
console.log("First element: " + nums[0]);
console.log("Last element: " + nums[nums.length - 1]);

// Built-in methods
// Build-in array methods in JS are mutable and immutable.
// Mutable is when the method changes the same array.
// Immutable is when the method does not change the same array, but creates a new copy instead.

nums.push(4); // Mutable
nums.push(5); // Appends an element to the end of the array
console.log("Nums: ", nums);

nums.pop(); // Removes the last element from the array
console.log("Nums: ", nums);

nums.shift(); // Removes the first element from the array
console.log("Nums: ", nums);

nums.unshift(18); // Adds an element at the beginning of the array
console.log("Nums: ", nums);

nums.splice(1, 2); // Removes 2 elements, starting from index 0
console.log("Nums: ", nums);

nums.splice(1, 1, 45, 46); // Removes 1 element from index 1 and adds "45" and "46", starting from index 1
console.log("Nums: ", nums);

nums.splice(1, 0, 50, 60); // Inserts "50" and "60", starting from index 1
console.log("Nums: ", nums);

// arr.splice(startIndex, deleteCount, item1, item2, ...)
// startIndex - The position where you start removing elements and/or adding elements
// deleteCount - The number of elements we want to remove from the array, starting from `startIndex`
// item1, item2, ... - The elements we want to insert into the array, starting from `startIndex`

const slicedNums = nums.slice(1, 3); // Immutable, endIndex is exclusive - end element will be at endIndex - 1
console.log("Sliced: ", slicedNums);

nums.forEach((item, index) => {
  console.log("forEach: " + item + ` Index: ${index}`);
}); // The same as for-of loop

const mappedNums = nums.map((num) => {
  return num + 2;
});

console.log("Mapped nums", mappedNums);

const complexArr = [
  {
    name: "Didi",
    age: 18,
    gender: "Female",
  },
  {
    name: "Stefko",
    age: 21,
    gender: "Male",
  },
];

const mappedComplexArr = complexArr.map((person) => {
  // const result = {
  //   name: person.name,
  //   age: person.name,
  //   name_age: person.name + ": " + person.age
  // }

  const result = {
    ...person, // This is called spread operator which retrieves all key-values from the object, it gets "name" and "age" properties in our case
    name_age: person.name + ": " + person.age,
  }; // It is the same as the above

  return result;
});

console.log("Mapped complex arr: ", mappedComplexArr);

const filteredNums = nums.filter((num) => {
  return num % 2 === 0;
});

console.log("Filtered nums", filteredNums);

nums.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }

  return 0;
}); // Bonus method

console.log("Sorted nums", nums);
