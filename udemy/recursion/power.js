// 제곱 제귀로 구하기
function power(num, pow) {
  if (pow === 0) return 1;
  return num * power(num, pow - 1);
}

console.log(power(2, 10)); // 1024
console.log(power(2, 0)); // 1
console.log(power(2, 4)); // 16

// node udemy/recursion/power.js
