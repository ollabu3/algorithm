function validAnagram(text1, text2) {
  let validCounter1 = getCounter(text1);
  let validCounter2 = getCounter(text2);
  for (let key in validCounter1) {
    if (!(validCounter1[key] === validCounter2[key])) {
      return false;
    }
  }
  return true;
}

const getCounter = (text) => {
  let counter = {};

  for (let i = 0; i < text.length; i++) {
    let item = text[i];
    counter[item] = (counter[item] || 0) + 1;
  }
  return counter;
};

console.log(validAnagram("", "")); // true
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awsome", "awesom")); // true
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true

//  node udemy/solving_pattern/validAnagram.js
