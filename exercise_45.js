// The break Keyword

// The break keyword allows programs to “break” out of the loop from within the loop’s block.

for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');

// This is the output for the above code:

//Banana.
//Banana.
//Banana.
//Orange you glad I broke out the loop!

// break statements can be especially helpful when we’re looping through large data structures!
