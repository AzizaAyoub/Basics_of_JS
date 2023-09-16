// Functions as Parameters

// functions can behave like any other type of data in JavaScript, 
// It might not surprise you to learn that functions can accept other functions as parameters. 

// A higher-order function is a function that either accepts functions as parameters, returns a function, or both!
// We call functions that get passed in as parameters callback functions.
// When we invoke a higher-order function, and pass another function in as an argument, we don’t invoke the argument function.
// Invoking it would evaluate to passing in the return value of that function call.

const higherOrderFunc = param => {
  param();
  return `I just invoked ${param.name} as a callback function!`
}

const anotherFunc = () => {
  return 'I\'m being invoked by the higher-order function!';
}

higherOrderFunc(anotherFunc);

// Lastly, we invoke higherOrderFunc(), passing in anotherFunc as its argument

higherOrderFunc(() => {
  for (let i = 0; i <= 10; i++){
    console.log(i);
  }
});

const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  if (checkA === checkB) {
    return checkB;
  } else {
    return 'inconsistent results';
  }

}
console.log(checkConsistentOutput(addTwo, 34));
