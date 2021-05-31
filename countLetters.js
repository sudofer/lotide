//const assertEqual = require('./assertEqual');

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

//console.log(countLetters('lighthouse in the house'));

module.exports = countLetters;