/*
프로그래머스 배달
https://programmers.co.kr/learn/courses/30/lessons/12978?language=javascript
출처 : 프로그래머스
다익스트라 알고리즘
*/

function solution(N, road, K) {
  const dist = Array(N + 1).fill(Infinity);
  const nodes = Array.from({ length: N + 1 }, () => []);

  road.forEach(([town, arrive, distance]) => {
    nodes[town].push({ arrive: arrive, distance: distance });
    nodes[arrive].push({ arrive: town, distance: distance });
  });

  const queue = [{ arrive: 1, distance: 0 }];
  dist[1] = 0;

  while (queue.length) {
    let { arrive } = queue.pop();

    // 4.
    nodes[arrive].forEach((next) => {
      if (dist[next.arrive] > dist[arrive] + next.distance) {
        dist[next.arrive] = dist[arrive] + next.distance;
        queue.push(next);
      }
    });
  }

  return dist.filter((item) => item <= K).length;
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
); // result 4

console.log(
  solution(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
); // result 4
//  node study/delivery.js
