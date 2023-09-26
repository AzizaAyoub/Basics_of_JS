// Property Value Shorthand

// ES6 introduced some new shortcuts for assigning properties to variables known as destructuring.
// To remind ourselves, here’s a truncated version of the factory function:

const monsterFactory = (name, age) => {
  return {
    name: name,
    age: age
  }
};

// Imagine if we had to include more properties, that process would quickly become tedious! 
// But we can use a destructuring technique, called property value shorthand, to save ourselves some keystrokes. 

const monsterFactory = (name, age) => {
  return {
    name,
    age
  }
};

// We refactor the previous factory function.
const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)
