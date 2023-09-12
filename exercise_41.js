// Looping through Arrays

// To loop through each element in an array, a for loop should use the array’s .length property in its condition.

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}
//Grizzly Bear
//Sloth
//Sea Lion 

// With for loops, it’s easier for us to work with elements in arrays.

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`);
}
