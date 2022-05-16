function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = getCounter(arr1);
  let frequencyCounter2 = getCounter(arr2);

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

const getCounter = (arr) => {
  let frequencyCounter = {};
  for (let val of arr) {
    frequencyCounter[val] = (frequencyCounter[val] || 0) + 1;
  }
  return frequencyCounter;
};
