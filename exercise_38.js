// Loops

// A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached.// When we need to reuse a task in our code, we often bundle that action in a function.

// The For Loop


/*
The typical for loop includes an iterator variable that usually appears in all three expressions.
The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration.
An initialization starts the loop and can also be used to declare the iterator variable.

A stopping condition is the condition that the iterator variable is evaluated against— if the condition evaluates to true the code block will run, and if it evaluates to false the code will stop.
An iteration statement is used to update the iterator variable on each loop.
*/

// Write your code below
for (let i = 5; i < 11; i++) {
  console.log(i); // output 5 6 7 8 9 10
}

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}
// output 0 1 2 3 4
