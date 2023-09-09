// Practice Good Scoping

const logSkyColor = () => {
  const dusk = true;
  let color = 'blue';
  if (dusk) {
    let color = 'pink';
    console.log(color); // Prints "pink"
  }
  console.log(color); // Prints "blue"
};

console.log(color); // throws a ReferenceError

// We create a variable color inside the logSkyColor() function.

// After the if statement, we define a new code block with the {} braces. Here we assign a new value to the variable color if the if statement is truthy.

// Within the if block, the color variable holds the value 'pink', though outside the if block, in the function body, the color variable holds the value 'blue'.

// On the last line, we attempt to print the value of color outside both the if statement and the definition of logSkyColor().
// This will throw a ReferenceError since color only exists within the scope of those two blocks — it is never defined in the global scope.

onst logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();
