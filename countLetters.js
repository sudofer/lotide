const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = string => {
  const finalCount = {};
  let noSpace = string.split(' ').join('');
  for (let chr of noSpace) {
    if (finalCount[chr]) {
      finalCount[chr] += 1;
    } else {
      finalCount[chr] = 1;
    }
  }
  return finalCount;
};

console.log(countLetters('lighthouse in the house'));