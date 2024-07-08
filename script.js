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
