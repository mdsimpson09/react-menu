function unroll(squareArray) {
    const result = [];
  
    while (squareArray.length > 0) {
      // Traverse right
      result.push(...squareArray.shift());
  
      // Traverse down
      for (let i = 0; i < squareArray.length; i++) {
        result.push(squareArray[i].pop());
      }
  
      // Traverse left if there are rows left
      if (squareArray.length > 0) {
        result.push(...squareArray.pop().reverse());
      }
  
      // Traverse up
      for (let i = squareArray.length - 1; i >= 0; i--) {
        if (squareArray[i].length > 0) {
          result.push(squareArray[i].shift());
        }
      }
    }
  
    return result;
  }
  
  module.exports = unroll;
  
//   PASS  ./unroll.test.js
//   #unroll
//     ✓ is a function (2ms)
//     ✓ should unroll a square array in a spiral manner (1ms)
//     ✓ should unroll a smaller square array in a spiral manner (1ms)
//     ✓ should handle an empty square array (1ms)
//     ✓ should handle a square array with a single element (2ms)
//     ✓ should handle a square array with one row (1ms)

// Test Suites: 1 passed, 1 total
// Tests:       6 passed, 6 total
// Snapshots:   0 total


// Time:        0.824s
// Ran all test suites.

