/*
프로그래머스 영어 끝말잇기
https://programmers.co.kr/learn/courses/30/lessons/12981
출처: 프로그래머스
*/

function solution(n, words) {
  var answer = [0, 0];

  let check = false;
  if (words.length === 0) return answer;
  words = words.map((word, index) => {
    return { index: index + 1, word };
  });

  let preWords = [];
  while (check === false) {
    const preWord = words.shift();
    preWords.push(preWord.word);
    const lastSpell = preWord.word[preWord.word.length - 1];
    const currWord = words[0];
    if (lastSpell !== currWord.word[0] || preWords.includes(currWord.word)) {
      console.log({ lastSpell });
      console.log({ currWord });
      answer[0] = currWord.index % n === 0 ? n : currWord.index % n;
      answer[1] = Math.ceil(currWord.index / n);
      check = true;
    }
    console.log({ length: words.length });
    if (words.length === 1) break;
  }
  return answer;
}
//   let count = n;
//   let preWords = [];
//   if (words.length === 0) return answer;

//   for (let i = 0; i < words.length; i++) {
//     if (i === 0) {
//       preWords.push(words[i]);
//       continue;
//     }
//     const preEndWords = words[i - 1][words[i - 1].length - 1];
//     if (preWords.includes(words[i]) || preEndWords !== words[i][0]) {
//       console.log({ preEndWords });
//       console.log({ B: words[i] });
//       answer[0] = i + 1;
//       break;
//     }
//     preWords.push(words[i]);
//   }
//   answer[1] = Math.ceil(answer[0] / n);
//   answer[0] = answer[0] === 0 ? 0 : count % n === 0 ? n : count % n;

console.log(
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
); // [1, 3]

console.log(
  solution(3, [
    "tank",
    "kick",
    "know",
    "wheel",
    "land",
    "dream",
    "mother",
    "robot",
    "tank",
  ])
); // [3, 3]

console.log(
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ])
); // [0, 0]

//  node study/endTalk.js
