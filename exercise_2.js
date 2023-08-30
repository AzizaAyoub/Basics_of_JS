// Prior to the ES6, programmers could only use the var keyword to declare variables.
var myName = 'Arya';
console.log(myName);
// Output: Arya
// var, short for variable, is a JavaScript keyword that declares, a new variable.

// The let keyword signals that the variable can be reassigned a different value.
let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito
 
let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350
 
// If we don’t assign a value to a variable declared using the let keyword, it automatically has a value of undefined.
// We can reassign the value of the variable.

// The way you declare a const variable and assign a value to it follows the same structure as let and var.
const myName = 'Gilberto';
console.log(myName); // Output: Gilberto
myName = 'Aziza';
console.log(myName); // output: Aziza
 
// A const variable cannot be reassigned because it is constant. 
// Constant variables must be assigned a value when declared.

// Mathematical Assignment Operators
let w = 4;
w = w + 1;
 
console.log(w); // Output: 5
let w = 4;
w += 1;
 
console.log(w); // Output: 5
let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15
 
let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100
 
let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4
 
// The Increment and Decrement Operator
// Increment operator (++)
// Decrement operator (--)

let a = 10;
a++;
console.log(a); // Output: 11
 
let b = 20;
b--;
console.log(b); // Output: 19
 
// The + operator can be used to combine two string values even if those values are being stored in variables:
let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'

let favoriteAnimal = 'Donkey';
console.log('My favorite animal: ' +  favoriteAnimal);

// String Interpolation

// we can insert, or interpolate, variables into strings using template literals.
const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`);
// Output: I own a pet armadillo.
 
let myName = 'Aziza';
let myCity = 'Dubi';
console.log(`my name is ${myName} my favorite city is ${myCity}`);

// Typeof operator

// The typeof operator checks the value to its right and returns, or passes back, a string of the data type.
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
 
const unknown2 = 10;
console.log(typeof unknown2); // Output: number
 
const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean
let newVariable = 'Playing around with typeof.';
newVariable = 1;
console.log(typeof newVariable);
console.log(typeof newVariable);

