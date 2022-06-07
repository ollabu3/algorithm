/*
프로그래머스 파일명 정렬
https://programmers.co.kr/learn/courses/30/lessons/17686
출처 : 프로그래머스

정규표현식
Head, Number , Tail

Head - 숫자가 아닌 문자로 이루어져 있음
Number - 숫자 최대 5글자 사이
Tail - 나머지 부분

*/

function solution(files) {
  let arr = [];
  const pattern = /(\D+)(\d{1,5})/; // 문자열만 , 1 ~ 5 길이의 숫자

  files.forEach((curr, index) => {
    const sliceStr = pattern.exec(curr);
    const head = sliceStr[1].toLowerCase();
    const number = sliceStr[2];
    const tail = curr.slice(sliceStr[0].length);
    arr.push({ head, number, tail, index });
  });

  /*
   head끼리 같다, number 끼리 같다 => 원래 입력에 주어진 순서를 유지한다
   head만 같다 => number 만 비교
   다 다르다 => head만 비교
    */
  arr.sort((a, b) => {
    if (a.head === b.head && a.number === b.number) {
      // 원래 입력에 주어진 순서를 유지
      return 0;
    }
    if (a.head === b.head) {
      // number 만 비교
      return a.number - b.number; // 오름차순
    }
    return a.head > b.head ? 1 : -1;
  });

  const answer = arr.map((curr) => {
    return files[curr.index];
  });
  return answer;
}

//  node study/fileNameSort.js

console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
);
//  ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]

console.log([
  [
    "F-5 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
  ],
]);
// ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
