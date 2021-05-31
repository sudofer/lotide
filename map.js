// const assertArraysEqual = (array1, array2) => {
//   if (eqArrays(array1, array2)) {
//     console.log(`✅ Assertation Passed! ${array1} === ${array2}`);
//   } else {
//     console.log(` 🛑 Assertation Failed! ${array1} !== ${array2}`);
//   }
// };

// const eqArrays = (array1, array2) => {
//   if (array1.length !== array2.length) {
//     return false;
//   }
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   } return true;

// };

// const words = ["ground", "control", "to", "major", "tom"];

// let expected = [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ];

const map = (array, callback) => {
  // temporary code:
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// const results1 = map(words, word => word.toUpperCase());
// //console.log(results1);


// console.log(assertArraysEqual(results1, expected));

module.exports = map;