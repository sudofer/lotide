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
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];


const takeUntil = (array, callback) => {
  let final = [];
  for (let elem of array) {
    if (callback(elem)) {
      return final;
    } else {
      final.push(elem);
    }
  }
};

// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// const results1 = takeUntil(data1, x => x < 0);

// console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));

module.exports = takeUntil;