/*
프로그래머스 n^2 배열 자르기 
출처: https://school.programmers.co.kr/learn/courses/30/lessons/87390

n: 3
left: 2
right: 5
n행 n열의 2차원 배열을 만든다

let arr = [[], [], []] 


for(i = 0, i < n; i++) {
// 반복하는데 
// 1행 1열부터 i행 i열까지의 모든 빈 칸을 숫자 i로 채웁니다.


}
arr : [
 
  열  1  2  3
행

1    [1, 2, 3],

2    [2, 2, 3],

3    [3, 3, 3]

]

arr : [
 
  열  1  2  3
행

1    [ (1,1), (1,2), (1,3) ],

2    [ (2,1), (2,2), (2,3) ],

3    [ (3,1), (3,2), (3,3) ] 

]
최대값들만..

마지막 arr index는 무조건 n만 들어감

1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.

arr: [1, 2, 3, 2, 2, 3, 3, 3, 3]
     
새로운 1차원 배열을 arr이라 할 때 arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지웁니다
arr[2], arr[3], arr[4], arr[5] 만 남기고 나머지는 지웁니다.

answer: [3, 2, 2, 3]

(3,1), (1,2), (2,2), (3,2)

*/
function solution(n, left, right) {
  let answer = [];
  let newArr = [];
  for (let i = 0; i < n; i++) {
    let arr = [];
    for (let j = 0; j < n; j++) {
      let maxNum = Math.max(i + 1, j + 1);
      arr.push(maxNum);
    }
    newArr.push(arr);
  }

  answer = newArr.flat();

  return answer.slice(left, right + 1);
}

// (signal: aborted (core dumped)) : 메모리관련 에러
console.log(solution(3, 2, 5)); // [3,2,2,3]
console.log(solution(4, 7, 14));
[4, 3, 3, 3, 4, 4, 4, 4];

//  node study/arraySlice.js
