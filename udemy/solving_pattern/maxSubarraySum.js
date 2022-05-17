function maxSubarraySum(arr, num) {
  // num갯수 조합에서 가장 큰 합,연속으로 붙어있어야함
  if (arr) return null;
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - num];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
maxSubarraySum([], 4); // null
