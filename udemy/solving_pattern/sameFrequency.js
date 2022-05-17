function sameFrequency(num1, num2) {
  // 빈도수 세기 패턴
  const numtoString1 = String(num1);
  const numtoString2 = String(num2);

  if (numtoString1.length !== numtoString2.length) {
    return false;
  }
  const counter1 = getCounter(numtoString1);
  const counter2 = getCounter(numtoString2);

  for (let key in counter1) {
    if (counter1[key] !== counter2[key]) return false;
  }
  return true;
}

const getCounter = (num) => {
  let result = {};
  for (let i = 0; i < num.length; i++) {
    const item = num[i];
    result[item] = result[item] ? result[item] + 1 : 1;
  }
  return result;
};

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
// node udemy/solving_pattern/sameFrequency.js
