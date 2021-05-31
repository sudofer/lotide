const assertArraysEqual = require('../assertArraysEqual');
 

console.log(assertArraysEqual);
assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,,3], [1,,3]);
assertArraysEqual([1,2,'string'], [1,2,'string']);
assertArraysEqual([1,2,3], [1,2,3]);