// Arrays with let and const

/*
Variables declared with let can be reassigned.
Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable.
Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.
*/

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments[0] = 'Mayo';
condiments = ['Mayo'];
console.log(condiments);
console.log(condiments);
utensils = ['Spoon']; // reference error connot update an array which is declare with const keyword.
