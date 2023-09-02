// Parameters and Arguments
// When declaring a function, we can specify its parameters. 
// Parameters allow functions to accept input(s) and perform a task using the input(s).

// The values that are passed to the function when it is called are called arguments.

function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.'
);
};
sayThanks('Cole');
function addTwo(num1, num2) {
  let num3 = num1 + num2;
  console.log(num3);
};
addTwo(3, 6);
// print 9
const rectWidth = 10;
const rectHeight = 6;
function calculateArea(width, height) {
  console.log(width * height);
}
calculateArea(rectWidth, rectHeight);


