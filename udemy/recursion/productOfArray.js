// arr 차례대로 곱하기
function productOfArray(arr) {
  let newArr = arr;
  if (!arr.length) return true;

  return newArr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

// node udemy/recursion/productOfArray.js
