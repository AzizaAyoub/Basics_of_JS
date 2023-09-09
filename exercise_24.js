// Block Scope

//  When a variable is defined inside a block, it is only accessible to the code within the curly braces {}
/*
Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block.
*/

const logSkyColor = () => {
  let color = 'blue';
  console.log(color); // Prints "blue"
};

logSkyColor(); // Prints "blue"
console.log(color); // throws a ReferenceError

const logVisibleLightWaves = () => {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}
logVisibleLightWaves();
console.log(lightWaves); // throws a ReferenceError
