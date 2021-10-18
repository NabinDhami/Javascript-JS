// There are eight basic data types in JavaScript
// String       Represents textual data
// Number       An integer or a floating-point number
// BigInt       An integer with arbitrary precision
// Boolean      Any of two values: true or false
// undefined    A data type whose variable is not initialized
// null        	Denotes a null value
// Symbol       Data type whose instances are unique and immutable
// Object      	Key-value pairs of collection of data

// Data Types
// Primitives/ Value types
// Strings
// Number
// Boolean
// Undefine
// Null
node
// Reference types
// Object
// Array
// Function

// JavaScript String
// String is used to store text. In JavaScript, strings are surrounded by quotes:
// Single quotes: 'Hello'
// Double quotes: "Hello"
// Backticks: `Hello`
//strings example
const fname = "Nabin";
const lname = "Dhami";
const fullName = `Your full name is ${fname} ${lname}`;
console.log(fname);
console.log(lname);
console.log(fullName);

// JavaScript Number
// Number represents integer and floating numbers (decimals and exponentials).
const number1 = 3;
const number2 = 3.433;
const number3 = 3e5; // 3 * 10^5
console.log(number1);
console.log(number2);
console.log(number3);

// JavaScript BigInt
const value1 = 900719925124740998n;
console.log(value1);

// JavaScript Boolean
// This data type represents logical entities. Boolean represents one of two values: true or false. It is easier to think of it as a yes/no switch
const auth = true;
console.log(auth);

// JavaScript undefined
// The undefined data type represents value that is not assigned. If a variable is declared but the value is not assigned, then the value of that variable will be undefined.
let undefined;
console.log(undefined);

// JavaScript null
// In JavaScript, null is a special value that represents empty or unknown value
const number = null;
console.log(number);

// JavaScript Symbol
// This data type was introduced in a newer version of JavaScript (from ES2015).
// A value having the data type Symbol can be referred to as a symbol value. Symbol is an immutable primitive value that is unique. For example,
const sy1 = Symbol("hello");
const sy2 = Symbol("hello");
console.log(sy1);
console.log(sy2);
// Though value1 and value2 both contain 'hello', they are different as they are of the Symbol type.

// JavaScript typeof
// To find the type of a variable, you can use the typeof operator
const hello = 1;
const hi = "hello";
console.log(typeof hello);
console.log(typeof hi);
