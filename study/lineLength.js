/*
프로그래머스 겹치는 선분의 길이
출처: https://school.programmers.co.kr/learn/courses/30/lessons/120876

[[0, 1], [2, 5], [3, 9]]

제일 작은 값, 제일 큰 값 해서 allLine length 구함

0 ~ 9니까 10개
[{line: 0, count: 0}, {line:1, count: 0}, ... {line:9, count: 0}]

0 index 

allLines[i].count += 1;

*/
function solution(lines) {
  let count = 0;
  let allLines = [];
  const startLine = Math.min(...lines.flat()); // 0
  const endLine = Math.max(...lines.flat()); // 9

  for (let i = startLine; i <= endLine; i++) {
    allLines.push({ line: i, count: -1 });
  }

  lines.forEach(([start, end]) => {
    let min = 0;
    let max = 0;

    for (const i in allLines) {
      if (allLines[i].line === start) min = Number(i);
      if (allLines[i].line === end) max = Number(i);
    }
    for (let i = min + 1; i <= max; i++) {
      allLines[i].count += 1;
    }
  });

  allLines.forEach((line) => {
    if (line.count > 0) count++;
  });

  return count;
}

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
); // 2
console.log(
  solution([
    [-1, 1],
    [1, 3],
    [3, 9],
  ])
); // 0
console.log(
  solution([
    [0, 5],
    [3, 9],
    [1, 10],
  ])
); // 8

//  node study/lineLength.js
