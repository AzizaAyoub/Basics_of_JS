// More Array Methods

/*
Some arrays methods that are available to JavaScript developers include: .join(), .slice(), .splice(), .shift(), .unshift(), and .concat() amongst many others.
Using these built-in methods makes it easier to do some common tasks when working with arrays.
*/

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift(); // delete the 'orange juice' element.
console.log(groceryList);
groceryList.unshift('popcorn'); // add the popcorn element .
console.log(groceryList);
console.log(groceryList.slice(1, 4)); // represents three elements from array.
console.log(groceryList);
const pastaIndex = groceryList.indexOf('pasta'); // find index of 'pasta' save the return value in a new variable.
console.log(pastaIndex);
