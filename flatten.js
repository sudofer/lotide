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

// const assertArraysEqual = (array1, array2) => {
//   if (eqArrays(array1, array2)) {
//     console.log(`✅ Assertation Passed! ${array1} === ${array2}`);
//     return false;
//   }
//   console.log(` 🛑 Assertation Failed! ${array1} !== ${array2}`);
// };

const flatten = array => {
  let flat = [];
  for (let elem of array) {
    if (Array.isArray(elem)) {
      for (let nestedElem of elem) {
        flat.push(nestedElem);
      }
    } else flat.push(elem);
  }
  return flat;
};






// console.log(flattenArray([1, 2, [3, 4], 5, [6]]));

// assertArraysEqual(flattenArray([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);

module.exports = flatten;