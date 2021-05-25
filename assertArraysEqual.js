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

const assertArraysEqual = (array1, array2) => {
  if (eqArrays(array1, array2)){
    console.log(`✅ Assertation Passed! ${array1} === ${array2}`);
    return false;
  }
  console.log(` 🛑 Assertation Failed! ${array1} !== ${array2}`);
}

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,,3], [1,,3]);
assertArraysEqual([1,2,'string'], [1,2,'string']);
assertArraysEqual([1,2,3], [1,3,3]);