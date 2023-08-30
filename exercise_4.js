// If...Else Statements

/*
If we wanted to add some default behavior to the if statement, we can add an else statement to run a block of code when the condition evaluates to false.
*/

if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
}
// Prints: But the code in this block will!

/*
Uses the else keyword following the code block of an if statement.
Has a code block that is wrapped by a set of curly braces {}.
The code inside the else statement code block will execute when the if statement’s condition evaluates to false
*/

// declear a variable
let sale = true;
// reassign sale variable
sale = false;
// use an if...else statements
if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}
let fruit = 'banana';
let color = 'yellow';
if (fruit === 'apple') { // if will evaluates to false
  console.log(`${fruit} is delicious`);
} else { // then will execute else statement
  console.log(`${fruit} is ${color} `); // log banana is yellow
};

