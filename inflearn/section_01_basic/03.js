// 연필 개수
// 한 학생 당 1자루씩 연필이 필요하다 할 때 n명이 학생수를 입력하면 필요한 연필의 다스 수를 계산
// 1다스 === 12자루 1 ~ 12명 한자루 13 ~ 24명 두자루
function solution(n) {
  let answer;
  let bundle = 12; // 한다스
  // 몫 구하기 함수
  function int(num) {
    return parseInt(num / bundle);
  }
  // 나머지 값 없으면 몫만 , 아니면 몫 + 1
  if (n % bundle === 0) answer = int(n);
  else answer = int(n) + 1;
  return answer;
}

function solution2(n) {
  let answer;
  let bundle = 12; // 한다스
  answer = Math.ceil(n / bundle);
  return answer;
}
console.log(solution(178));
console.log(solution2(178));
