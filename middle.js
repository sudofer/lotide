
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

module.exports = middle;
