/*
프로그래머스 옹알이
출처: https://school.programmers.co.kr/learn/courses/30/lessons/120956
*/

const languages = ["aya", "ye", "woo", "ma"];

function solution(babbling) {
  let answer = 0;

  while (babbling.length) {
    const firstBabling = babbling.shift();
    const result = firstBabling
      .replaceAll("aya", " ")
      .replaceAll("ye", " ")
      .replaceAll("woo", " ")
      .replaceAll("ma", " ");
    if (!result.trim()) answer++;
  }
  return answer;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); // 1
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3
