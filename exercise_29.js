// Accessing Elements

/*
Each element in an array has a numbered position known as its index.
Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1. Therefore, the first item in an arraywill be at position 0.
*/
// like this:

let array = ['Ahmad', 'Rahman', 'Aman'];
console.log(array[1]);

// You can also access individual characters in a string using bracket notation and the index. For instance, you can write:

const hello = 'Hello World';
console.log(hello[6]);
// Output: W

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[0];
console.log(listItem); // Fortune favors the brave.
console.log(famousSayings[2]); // Where there is love there is life.
console.log(famousSayings[3]); // output undifinde


