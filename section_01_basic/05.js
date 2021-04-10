// 최솟값 구하기
function solution(arr) {
  min = Number.MAX_SAFE_INTEGER; // 가장 큰 정수로 초기화 시켜놓기
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[1];
  }

  return answer;
}

function solution2(arr) {
  min = Number.MAX_SAFE_INTEGER;
  let answer = arr.reduce((acc, curr) =>
    acc > curr ? (acc = curr) : (acc = acc)
  );
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
console.log(solution2(arr));
