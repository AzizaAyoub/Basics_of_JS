// Functions as Data

// we can assign functions to variables, and we can reassign them to new variables.

// we have an annoyingly long function name that hurts the readability of any code in which it’s used.

const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};

// we can re-assign the function to a variable with a suitably short name:

const busy = announceThatIAmDoingImportantWork;

busy(); // This function call barely takes any space!
// In JavaScript, functions are first class objects. 
// This means that, like other objects you’ve encountered, JavaScript functions can have properties and methods.

// functions are a type of object, they have properties such as .length and .name, and methods such as .toString(). 

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();
console.log(isTwoPlusTwo.name);


