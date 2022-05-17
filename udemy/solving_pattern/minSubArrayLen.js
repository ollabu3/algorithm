function minSubArrayLen(arr, nums) {
  if (Math.max(...arr) > nums) return 1;
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    } else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
  // 합이 num이거나 더 큰 연속적인 arr를 구하라, 배열의 최소한의 길이어야함
}
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 => [4,3]
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); //2 => [5,4]
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 => [62]
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
