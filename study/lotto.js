function solution(lottos, win_nums) {
  let answer = [];
  let correctCnt = 0;
  const rank = 7;
  let exactNum = lottos.filter((num) => num !== 0);
  let unexactNumCnt = 6 - exactNum.length;

  while ((i = exactNum.shift()) !== undefined) {
    win_nums.forEach((winNum) => {
      if (winNum === i) {
        correctCnt++;
      }
    });
  }

  const max =
    correctCnt + unexactNumCnt > 1 ? 7 - (correctCnt + unexactNumCnt) : 6;
  const min = correctCnt > 1 ? 7 - correctCnt : 6;

  answer.push(max, min);

  return answer;
}
