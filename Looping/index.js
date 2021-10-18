// Looping is the repeatation of code until the certain conditions

// JavaScript For loop
for (i = 1; i <= 5; i++) {
  /*Initialization Condition Increment/Decrement*/
  console.log(i);
}

// let days = {
//   one: "Sunday",
//   two: "Monday",
//   three: "Tuesday",
// };
// for (let x in days) {
//   console.log(days[x]);
// }
// const cars = ["bmw", "ferrari", "hawa"];

// for (let y of cars) {
//   console.log(y);
// }

//For LOOP
// for (let index = 0; index < people.length; index++) {
//   const name = people[index];
//   console.log(name);
// }

//For in LOOP
obj = {
  name: "nabin",
  langauge: "Javascript",
  hobbies: "Playing",
};
for (let key in obj) {
  console.log(key); //returns key
  console.log(obj[key]); //return value
}

// For of LOOP
people = ["Nabin", "Anil", "Apil", "Hemant"];
for (let name of people) {
  console.log(name);
}
