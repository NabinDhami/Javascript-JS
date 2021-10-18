// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).
//Function parameters are listed inside the parentheses () in the function definition.
// Function arguments are the values received by the function when it is invoked.
//Inside the function, the arguments (the parameters) behave as local variables.
//When JavaScript reaches a return statement, the function will stop executing.

function add(a, b) {
  //Functions parameters (Function Defination)
  return a + b;
}
console.log(add(3, 2)); //Functions argumnets (Function calling/invoke)

//Variables declared within a JavaScript function, become LOCAL to the function.
// Local variables can only be accessed from within the function.
const name = "Nabin";
function sayHello() {
  return "Hello" + " " + name;
}
console.log(sayHello());
