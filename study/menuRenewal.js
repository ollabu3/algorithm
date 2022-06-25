/*
프로그래머스 메뉴 리뉴얼
https://programmers.co.kr/learn/courses/30/lessons/72411
출처: 프로그래머스
*/

function solution(orders, course) {
  let answer = [];
  let obj = {};
  let select = {};

  for (let i = 0; i < orders.length; i++) {
    for (let j = 2; j <= orders[i].length; j++) {
      // 요리2개부터니까
      if (course.includes(j)) {
        // 코수요리 갯수가 맞다면
        const arr = menuList(orders[i].split(""), j);
        // [["A","B"],["AC"]]
        //["AB", "AC"]
        const menu = arr.map((item) => item.join(""));
        for (let key of menu) {
          obj[key] = (obj[key] || 0) + 1;
        }
      }
    }
  }
  // 가장 큰, 동접인
  for (let key in obj) {
    if (obj[key] !== 1 && course.includes(obj[key])) {
      select[key] = obj[key];
    }
  }

  for (let i = 0; i < course.length; i++) {
    let max = 0;

    for (let key in select) {
      if (key.length === course[i]) {
        max = max < select[key] ? select[key] : max;
      }
    }

    for (let key in select) {
      if (key.length === course[i] && select[key] === max) {
        answer.push(key);
      }
    }
  }

  return answer.sort();
}

const menuList = function (order, course) {
  const results = [];
  if (course === 1) return order.map((el) => [el]);
  // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

  order.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = menuList(rest, course - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });

  return results.s;
};

// console.log(["XYZ", "XWY", "WXA"], [2, 3, 4]); // ["WX", "XY"]

console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
); // ["ACD", "AD", "ADE", "CD", "XYZ"]

//  node study/menuRenewal.js
