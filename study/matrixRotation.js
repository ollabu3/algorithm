/*
https://programmers.co.kr/learn/courses/30/lessons/77485
출처: 프로그래머스
*/
function solution(rows, columns, queries) {
  var answer = [];
  let matrix = [];

  for (let i = 1; i <= rows; i++) {
    let row = [];
    for (let j = 1; j <= columns; j++) {
      row.push((i - 1) * columns + j);
    }
    matrix.push(row);
  }

  for (query of queries) {
    let x1 = query[0] - 1;
    let x2 = query[2] - 1;
    let y1 = query[1] - 1;
    let y2 = query[3] - 1;

    let board = rotate(x1, y1, x2, y2, matrix);
    answer.push(Math.min(...board));

    for (let i = y1; i < y2; i++) {
      matrix[x1][i] = board.shift();
    }

    for (let i = x1; i < x2; i++) {
      matrix[i][y2] = board.shift();
    }

    for (let i = y2; i > y1; i--) {
      matrix[x2][i] = board.shift();
    }

    for (let i = x2; i > x1; i--) {
      matrix[i][y1] = board.shift();
    }
  }
  return answer;
}

function rotate(x1, y1, x2, y2, matrix) {
  let board = [];

  for (let i = y1; i < y2; i++) {
    board.push(matrix[x1][i]);
  }

  for (let i = x1; i < x2; i++) {
    board.push(matrix[i][y2]);
  }

  for (let i = y2; i > y1; i--) {
    board.push(matrix[x2][i]);
  }

  for (let i = x2; i > x1; i--) {
    board.push(matrix[i][y1]);
  }

  board.unshift(board.pop());
  return board;
}

console.log(
  solution(6, 6, [
    [2, 2, 5, 4],
    [3, 3, 6, 6],
    [5, 1, 6, 3],
  ])
);

//  node study/matrixRotation.js
