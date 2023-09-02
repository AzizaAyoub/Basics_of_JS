// Function Declarations
// One way to create a function is by using a function declaration.

/*
A function declaration consists of:
The function keyword.
The name of the function, or its identifier, followed by parentheses.
A function body, or the block of statements required to perform a specific task, enclosed in the function’s curly brackets, { }.
*/

// hoisting feature in JavaScript which allows access to function declarations before they’re defined.

greetWorld(); // Output: Hello, World!

function greetWorld() {
  console.log('Hello, World!');
}

// function declarations

function getReminder () {
  console.log('Water the plants.');
};
getReminder();
function greetInSpanish() {
  console.log('Buenas tardes.');
};
greetInSpanish();
function sayHello() {
  console.log('Hello World');
};
sayHello();
