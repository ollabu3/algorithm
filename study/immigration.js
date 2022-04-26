/*
프로그래머스 입국심사
https://programmers.co.kr/learn/courses/30/lessons/43238
출처 : 프로그래머스
이진검색
*/

function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 1;
  let right = n * times[times.length - 1];
  let answer = right;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let count = 0;
    times.forEach((value) => {
      count += Math.floor(mid / value); // 한 사람당 몇명 할 수 있는지
      if (count >= n) {
        answer = Math.min(mid, answer); // 최솟값
        return;
      }
    });

    if (count >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}

//  node study/immigration.js

console.log(solution(6, [7, 10])); //28
console.log(solution(6, [6, 10])); //24
console.log(solution(6, [8, 10])); //30
console.log(solution(6, [4, 10])); //20
console.log(solution(11, [3, 4, 10])); //18
console.log(solution(5, [1, 1, 10])); //3
