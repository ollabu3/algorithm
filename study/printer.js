/*
프로그래머스 프린터
https://school.programmers.co.kr/learn/courses/30/lessons/42587
출처 : 프로그래머스

1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면 J를 대기목록의 가장 마지막에 넣습니다.
3. 그렇지 않으면 J를 인쇄합니다.


A, B, C, D 의 중요도가 2 1 3 2 라면

중요도
C > D >= A > B 순으로 안쇄된다.

[1, 1, 9, 1, 1, 1] 이라면

1.
{ index: 0, priority: 1 },
{ index: 1, priority: 1 },
{ index: 2, priority: 9 },
{ index: 3, priority: 1 },
{ index: 4, priority: 1 },
{ index: 5, priority: 1 }

2. 0index가 우선순위가 아니므로 
{ index: 1, priority: 1 },
{ index: 2, priority: 9 },
{ index: 3, priority: 1 },
{ index: 4, priority: 1 },
{ index: 5, priority: 1 },
{ index: 0, priority: 1 }

3. 1index가 우선순위가 아니므로
{ index: 2, priority: 9 },
{ index: 3, priority: 1 },
{ index: 4, priority: 1 },
{ index: 5, priority: 1 },
{ index: 0, priority: 1 },
{ index: 1, priority: 1 }

4. 2index가 우선순위이므로 빠짐 (queue)
{ index: 3, priority: 1 },
{ index: 4, priority: 1 },
{ index: 5, priority: 1 },
{ index: 0, priority: 1 },
{ index: 1, priority: 1 }
*/
function solution(p, l) {
  let result = [];
  let priority = p.map((priority, index) => ({ index, priority }));

  while (priority.length !== 0) {
    // priorities가 0일때까지
    let max = Math.max(...priority.map((item) => item.priority)); // 우산순위
    let curr = priority.shift(); // 첫번째 index 뺀다
    if (curr.priority !== max) {
      priority.push(curr);
    } else {
      result.push(curr);
    }
  }

  // console.log({result})
  const answer = result.findIndex((item) => item.index === l) + 1;
  // console.log({answer})
  return answer;
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
console.log(solution([3, 3, 4, 2], 3)); // 4
