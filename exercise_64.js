// Arrow Functions and this

// If we use the this keyword in a method then the value of this is the calling object.

// However, it becomes a bit more complicated when we start using arrow functions for methods. Take a look at the example below:

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};

goat.diet(); // Prints undefined

// In the comment, you can see that goat.diet() would log undefined.

// Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object.
// the value of this is the global object, or an object that exists in the global scope, which doesn’t have a dietType property and therefore returns undefined.

const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}
robot.checkEnergy();
