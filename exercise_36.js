// Arrays and Functions

// When you pass an array into a function, if the array is mutated inside the function 
// That change will be maintained outside the function as well.

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept); // [ 'arrays', 'can', 'be', 'MUTATED' ]
function removeElement(newArr) { /* define a function and use a method */
  newArr.pop();
} 
removeElement(concept); // output call the function
console.log(concept); // output [ 'arrays', 'can', 'be' ]
