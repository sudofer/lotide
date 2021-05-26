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






const letterPositions = string => {
  const results = {};
  for (let i = 0; i < string.length; i++){
    if (string[i] === ' ') {
      continue;
    }
    if (!results[string[i]]){
      results[string[i]] = [i];
      continue;
    }
    if (results[string[i]]){
      results[string[i]].push(i);
      continue;
    }
  }
  return results;
}

console.log(letterPositions('lighthouse in the house'));

assertArraysEqual(letterPositions('lighthouse in the house'),{
  l: [ 0 ],
  i: [ 1, 11 ],
  g: [ 2 ],
  h: [ 3, 5, 15, 18 ],
  t: [ 4, 14 ],
  o: [ 6, 19 ],
  u: [ 7, 20 ],
  s: [ 8, 21 ],
  e: [ 9, 16, 22 ],
  n: [ 12 ]
} );