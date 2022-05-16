# 문제 해결 패턴

## 빈도수 세기 패턴 (frequency counters)

- 자바스크립트의 **객체를 이용하여** 다양한 값과 빈도를 수집

ex) same  
same[0]번째의 값들의 제곱이 same[1]번째에 있으면 true

```javascript
same([1, 2, 3], [4, 1, 9]); // true;
same([1, 2, 3], [1, 9]); // false;
same([1, 2, 3], [4, 4, 1]); // false;
```

```javascript
// 1) 중첩 loop를 사용
function same(arr1, arr2) {
  if (arr1.length !== arrw.length) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    let correctIndex = arr2.indexOf(arr[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
```

- 시간복잡도 -> **O(n^2)**

```javascript
// 2) frequency counters 사용
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
```

- 시간복잡도 -> **O(n)**
  <br>
  <br>
  <br>

## 다중 포인터 패턴 (multiple pointers)

- 인덱스나 위치에 해당하는 **포인터**나 값을 만든 다음 특정 조건에 따라 중간지점에서 양쪽 지점으로 이동시키는 것
- 선형구조, 이중 연결 리스트, 단일 연결 리스트...

### 다중 포인터 패턴을 할 수 있는 조건

- 정렬된 배열이어야 함 (오름차순)

ex) sumZero
합이 0인 첫번째 쌍을 찾는다

```javascript
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
```

```javascript
// 1) 중첩 loop를 사용
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
```

- 시간복잡도 -> **O(n^2)**

```javascript
// 2) 다중 포인터 패턴 사용
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
```

- 시간복잡도 -> **O(n)**

## 기준점 간 이동 배열 패턴 (sliding window)

- 배열이나 문자열과 같은 일련의 데이터를 입력하거나 특정 방식으로 연속적인 해당 데이터의 하위 집합을 찾는 경우에 유용

ex) maxSubarraySum  
붙어있는 배열중에 가장 큰 합 찾기

```javascript
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
maxSubarraySum([], 4); // null
```

```javascript
// 1) 중첩 loop를 사용
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
      console.log("TEMP ====", temp);
    }
    if (temp > max) {
      max = temp;
    }
    console.log("MAX ===", max);
  }
  return max;
}
```

- 시간복잡도 -> **O(n^2)**

```javascript
// 2) 기준점 간 이동 배열 패턴
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];

    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```

- 시간복잡도 -> **O(n)**

## 분할과 정복 패턴(divide and conquer)

- 배열을 세분해서 탐색
  ex) search

```javascript
// Linear Search
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
```

- 시간복잡도 -> **O(n)**

```javascript
// Binary Search
function search(arr, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let curentElement = array[middle];
    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}
```

- 시간복잡도 -> **Log(n)**
