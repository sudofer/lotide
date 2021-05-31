const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


assertEqual(eqArrays([1,2,3], [1,2,3]), true);
assertEqual(eqArrays([3,2,3], [1,2,3]), false);
assertEqual(eqArrays([3], [1,false,3]), false);


