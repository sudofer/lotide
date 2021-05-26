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

const eqObjects = (obj1, obj2) => {
  let x = Object.keys(obj1);
  let y = Object.keys(obj2);
  if (x.length !== y.length) {
    return false;
  }

  for (let key in obj1) {
    if (Array.isArray(obj1[key])) {
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (eqObjects(obj1, obj2)) {
    console.log(`✅ Assertation Passed! ${inspect(obj1)} === ${inspect(obj2)}`);
    return true;
  }
  console.log(` 🛑 Assertation Failed! ${inspect(obj1)} !== ${inspect(obj2)}`);
};

let x = {a: 1, b: 2};
let y = {a: 1, b: 2};

assertObjectsEqual(x,y);
