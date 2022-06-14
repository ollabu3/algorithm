/*
https://programmers.co.kr/learn/courses/30/lessons/77485
출처: 프로그래머스
*/
function solution(bridge_length, weight, truck_weights) {
  var answer = 1; // 초
  let bridge_weight = 0; // 다리 무게 상태
  let bridge_queue = []; // 다리에 있는 트럭 갯수 상태
  let truck_queue = []; // 도착한 트럭
  let truck_length = truck_weights.length; // 트럭 갯수
  truck_weights = truck_weights.map((weight) => ({ weight, time: 0 })); // {weight: x, time: 0}

  // 트럭이 다 지나갈 때 까지
  while (truck_queue.length !== truck_length) {
    if (bridge_queue.length <= bridge_length) {
      // 다리가 꽉차있지 않으면
      // 대기하고 있는 트럭이 있다면 and 다음 트럭이 다리를 건널 때 다리무게가 초과하지 않으면
      if (
        truck_weights.length !== 0 &&
        bridge_weight + truck_weights[0].weight <= weight
      ) {
        let curr = truck_weights.shift(); // 순서대로(0번째idx) 대기트럭을 뺀다
        bridge_queue.push(curr); // 다리에 트럭 추가
        bridge_weight += curr.weight; // 현재 다리 무게 상태에 트럭 무게 추가
      }
    }

    for (let i = 0; i < bridge_queue.length; i++) {
      // 다리에 있는 트럭 경과시간 +1
      bridge_queue[i].time += 1;
    }

    if (bridge_queue[0].time === bridge_length) {
      // 만약 다리를 통과했다면 (먼저 들어온 트럭 기준)
      let left_truck = bridge_queue.shift(); // 다리에서 트럭을 빼준다
      bridge_weight -= left_truck.weight; // 다리 무게에서 트럭무게 빼준다
      truck_queue.push(left_truck); // // 도착한 트럭을 추가해준다
    }

    answer++; // 시간 추가
  }
  return answer;
}

console.log(solution(2, 19, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10])); // 101
//  node study/truck.js
