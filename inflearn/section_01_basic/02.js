// 삼각형 판별하기
// 세 변이 주어졌을때는 삼각형의 제일 긴 변의 길이는
// 나머지 두 변의 길이의 합보다 작다
function solution(a, b, c) {
  let answer = "YES";
  // let max = Math.max(a, b, c);
  // 제일 긴 변의 길이
  if (a > b) max = a;
  else max = b;
  if (max < c) max = c;
  let sum = a + b + c;

  //제일 긴 변의 길이가 두 변의 길이의 합보다 작을 때 yes 아님 no
  if (max < sum - max) answer = "YES";
  else answer = "NO";

  return answer;
}

console.log(solution(13, 33, 17));
