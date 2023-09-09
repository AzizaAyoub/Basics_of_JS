// Scope Pollution

// When you declare global variables, they go to the global namespace. 
// The global namespace allows the variables to be accessible from anywhere in the program.

/*
Scope pollution is when we have too many global variables that exist in the global namespace, or when we reuse variables across different scopes.
Scope pollution makes it difficult to keep track of our different variables and sets us up for potential accidents.
*/

let num = 50;

const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};

logNum(); // Prints 100
console.log(num); // Prints 100

	const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);
