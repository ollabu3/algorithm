//  node study/crain.js

function solution(board, moves) {
  let answer = 0;
  let stack = [];
  let result = [];
  let size = board.length;
  let count = 0;

  while (count !== size) {
    let arr = [];
    board.forEach((doll) => {
      if (doll[count] !== 0) {
        arr.push(doll[count]);
      }
    });
    stack.push(arr);
    count++;
  }
  for (let i = 0; i < moves.length; i++) {
    if (stack[moves[i] - 1][0]) {
      result.push(stack[moves[i] - 1][0]);
      stack[moves[i] - 1].shift();
      if (result[result.length - 1] === result[result.length - 2]) {
        answer += 2;
        result.splice(result.length - 2, 2);
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
