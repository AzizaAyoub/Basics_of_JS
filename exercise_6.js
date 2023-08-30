// Logical Operators

// JavaScript, there are operators that work with boolean values known as logical operators.

// We can use logical operators to add more sophisticated logic to our conditionals. 

// the and operator (&&)
// the or operator (||)
// the not operator, otherwise known as the bang operator (!)

//When we use the && operator, we are checking that two things are true:

// Bellow declear two variables
let stopLight = 'green';
let pedestrians = 0;
if (stopLight === 'green' && pedestrians === 0) {
  console.log('Go!');
} else {
  console.log('Stop');
}

// If we only care about either condition being true, we can use the || operator:

// declear variable
let day = 'Sunday';
if (day === 'Saturday' || day === 'Sunday') { // will evaluates to true
  console.log('Enjoy the weekend!');// log Enjoy the weekend!
} else {
  console.log('Do some work.');
}

// The ! not operator reverses, or negates, the value of a boolean:

let excited = true;
console.log(!excited); // Prints false

let sleepy = false;
console.log(!sleepy); // Prints true

// uses && operatot
let mood = 'sleepy';
let tirednessLevel = 6;
if (mood === 'sleepy' && tirednessLevel  8) { // will evaluates to true
  console.log('time to sleep')
} else {
  console.log('not bed time yet');
}

