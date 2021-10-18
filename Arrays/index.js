//An array is a special variable, which can hold more than one value at a time.
// let array = ["Nabin", 19, "Hello"];

// console.log(array[1]);
// console.log(array[-1]); //returns undifefined
// console.log(typeof array); //Array is stored as object
// console.log(array);

// array[0] = "Dhami"; //Changing value
// array[3] = 45; //Adding Element
// console.log(array);
// const [name, age] = array; //object destructuring
// console.log(array.length); //For finding length of an array
// console.log(name);

let array1 = ["Nabin", 19, "Hello"];
console.log(array1);
// Popping
// The pop() method removes the last element from an array:
array1.pop();
/* pop() method returns the value that was "popped out"*/
console.log(array1); /* returns new array without last element*/

// Pushing
// The push() method adds a new element to an array (at the end)
array1.push("pushedElement"); /*The push() method returns the new array length*/
console.log(array1);

// Shifting Elements
// Shifting is equivalent to popping, working on the first element instead of the last.
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
array1.shift();
console.log(array1);
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
array1.unshift("Unshifted");
console.log(array1);

// Deleting Elements
// delete array1[0]; //returns undefined
// console.log(array1);

// Splicing an Array
// The splice() method can be used to add new items to an array:
array1.splice(0, 1, "Apple", "Banana"); //Returns array with deleted items
console.log(array1);
// The first parameter defines the position where new elements should be added (spliced in).
// The second parameter  defines how many elements should be removed.
// The rest of the parameters define the new elements to be added
array1.splice(1, 1); //index and number of elemensts to be deleted
console.log(array1); //Removes one element of 1st index

console.log(array1.slice(0, 2)); //returns elements from 0 index to 2nd index
console.log(array1.slice(1)); //returns elements from index 1
console.log(array1.toString()); //returns all elements as string
console.log(array1.sort()); //Sorting of an array
console.log(array1.reverse()); //Returns elements in reverse order
