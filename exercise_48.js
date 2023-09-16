// The .forEach() Method
// The first iteration method is .forEach(). Aptly named, .forEach() will execute the same code for each element of an array.
// .forEach() loops through the array and executes the callback function for each element.
// The return value for .forEach() will always be undefined.

// Another way to pass a callback for .forEach() is to use arrow function syntax.

groceries.forEach(groceryItem => console.log(groceryItem));

// We can also define a function beforehand to be used as the callback function.

function printGrocery(element){
  console.log(element);
}

groceries.forEach(printGrocery);

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`));
