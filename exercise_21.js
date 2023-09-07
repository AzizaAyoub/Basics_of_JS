// Blocks and Scope

/*
A block is the code found inside a set of curly braces {}. Blocks help us group one or more statements together and serve as an important structural marker for our code.
*/

const logSkyColor = () => {
  let color = 'blue';
  console.log(color); // blue
}

// Observe the block in an if statement:

if (dusk) {
  let color = 'pink';
  console.log(color); // pink
}
const city = 'New York City';
const logCitySkyline = () => {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
};
console.log(logCitySkyline());
