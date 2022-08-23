/**
 * 백준 킹, 퀸, 룩, 비숍, 나이트, 폰
 * 출처: https://www.acmicpc.net/problem/3003
 */

const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

const chess = [1, 1, 2, 2, 2, 8];
const answer = input.map((piece, index) => {
  return chess[index] - piece;
});

console.log(answer.join(" "));
