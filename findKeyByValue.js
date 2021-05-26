const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (obj, value) => {
  for (let keys in obj){
    if (obj[keys] === value){
      return keys;
    }
  }
}






const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  sweetKey: 1337
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, 1337), "sweetKey");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);