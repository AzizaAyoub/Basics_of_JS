 // In programming, we also perform a task based on a condition using an if statement:

if (true) {
  console.log('This message will print!');
}
// Prints: This message will print!

// we have an if statement. The if statement is composed of:

/*
The if keyword followed by a set of parentheses () which is followed by a block statement, indicated by a set of curly braces {}.

Inside the parentheses (), a condition is provided that evaluates to true or false.

If the condition evaluates to true, the code inside the curly braces {} runs, or executes.
If the condition evaluates to false, the block won’t execute.
*/

let sale = true;
sale = false;
if (sale === false) {  // It's evaluates to true
  console.log('Time to buy!'); // log Time to buy!
};
let name = 'Ahmad';
let age = 24;
if (typeof age === 'number' || typeof name === 'String') {
  console.log(`His name is ${name} and he is ${age} years old`) // log His name is Ahmad and he is 24 years old
};


