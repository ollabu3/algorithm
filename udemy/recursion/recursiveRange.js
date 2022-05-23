// 0부터 num까지 차례대로 더하기
function recursiveRange(num) {
  if (num === 1) return true;
  return num + recursiveRange(num - 1);
}
console.log(recursiveRange(6)); // 21
console.log(recursiveRange(10)); // 55

// node udemy/recursion/recursiveRange.js
