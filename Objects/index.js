//Creating Objet in key value pair
let person = {
  fname: "Nabin",
  lname: "Dhami",
  age: 20,
  height: 5.1,
  fullName: function () {
    //Method inside an object
    return this.fname + " " + this.lname; //this refers to the owner of the function
  },
};
console.log(person);
//Changing the value of element
person.height = 6.5;
console.log(person);
const name = person.fullName();
console.log(person.fname); //Accessing Object Properties
console.log(person["age"]);
console.log(name);

console.log("object");
for (let x in person) {
  console.log(x);
}
