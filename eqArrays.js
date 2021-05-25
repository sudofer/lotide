const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length){
    return false;
  }
  for (let i = 0; i < array1.length; i++){
    if (array1[i] !== array2[i]){
      return false;
    }
  } return true;

}

assertEqual(eqArrays([1,2,3], [1,2,3]), true);
assertEqual(eqArrays([3,2,3], [1,2,3]), false);
assertEqual(eqArrays([3], [1,2,3]), false);
assertEqual(eqArrays([[1]], [[1]]), true);

