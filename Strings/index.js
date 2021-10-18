// JavaScript strings are primitive values. JavaScript strings are also immutable.
// It means that if you process a string, you will always get a new string.
// The original string doesn’t change.

// To create literal strings in JavaScript,
// you use either single quotes or double quotes

const name = "Nabin";
console.log(name.length); //Getting the length of the string
console.log(name[2]); //Accessing characters
const greeting = "Good Morning" + " " + name; //Concatenating strings
console.log("Good Night".concat("", "Nabin"));
console.log(greeting);
console.log(name.slice(2, 4)); //Slicing strings
console.log(name.toUpperCase()); //Converting to uppercase
console.log(name.toLowerCase()); //Converting to Lowercase
const trim = "    Heyy    ";
console.log(trim);
console.log(trim.trim()); // The trim() method removes whitespace from both sides of a string

// Replacing String Content
// The replace() method replaces a specified value with another value in a string
let command = "Open the door";
let newCmd = command.replace("Open", "Please open");
console.log(command);
console.log(newCmd);

// Extracting String Parts
// There are 3 methods for extracting a part of a string:
// slice(start, end) ---slice() extracts a part of a string and returns the extracted part in a new string.
// substring(start, end) ---substring() cannot accept negative indexes.
// substr(start, length)---substr() is similar to slice() but the second parameter specifies the length of the extracted part.

const extracting = "Extracting";
console.log(extracting);
console.log(extracting.slice(2, -1)); // Postive value counting starts from begining and negataive value counting satarts from end
console.log(extracting.substring(2, 6)); // Returns value from index 2 to 5 index
console.log(extracting.substr(2, 8)); // Returns value form 2nd index of until its length becomes 8
