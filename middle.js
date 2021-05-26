const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertation Passed! ${array1} === ${array2}`);
    return false;
  }
  console.log(` 🛑 Assertation Failed! ${array1} !== ${array2}`);
};

const middle = array => {
  if (array.length < 3) {
    return [];
  }
  if (array.length % 2 !== 0) {
    let middleIndex = Math.ceil((array.length / 2) - 1);
    return array[middleIndex];
  }
  if (array.length % 2 === 0) {
    let middle1 = ((array.length / 2) - 1);
    let middle2 = (middle1 + 1);
    return [array[middle1], array[middle2]];
  }
  
};

console.log(middle([1,2,'middle1','middle2',5,6]));

assertArraysEqual((middle([1,2,'middle1','middle2',5,6])), ['middle1', 'middle2']);

assertArraysEqual(middle([1,2]), []);

assertArraysEqual(middle([1,2,3,4,5]), 3);