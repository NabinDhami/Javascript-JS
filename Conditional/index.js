// Conditional statements are used to perform different actions based on different conditions

// if else statements
const a = 10;
if (a > 0) {
  console.log("Positive Number");
} else {
  console.log("Negative Number");
}

//else if
const b = 0;
if (b > 0) {
  console.log("Positive Number");
} else if (b < 0) {
  console.log("Negative Number");
} else {
  console.log("Zero");
}

// Switch Statement
// The switch statement is used to perform different actions based on different conditions.
switch (11) {
  case 0:
    day = "Sunday";
    break;
  // When JavaScript reaches a break keyword, it breaks out of the switch block.
  // This will stop the execution inside the switch block.
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
  default:
    // The default keyword specifies the code to run if there is no case matched
    day = "Day of week";
}
console.log(day);
