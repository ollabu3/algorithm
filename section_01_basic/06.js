// 7개의 자연수가 주어질 때, 홀수인 자욘슈둘울 ㅁㅎ듀 ㄱㅎㄹ러 구 합을 구하고 고른 홀수들 중 최소값을 찾는 프로그램 작성
// node section_01_basic/06.js


function solution1(arr) {

    let answer = [];
    let sum = 0, min = Number.MAX_SAFE_INTEGER;
    for(let i of arr) {
        if(i % 2 === 1) {
            sum += i;
            if(i < min) min = i;
        }
    }
    answer.push(min, sum);

    return answer;
}

function solution2(arr) {
    let answer = [];
    let odd = arr.filter((curr) => curr % 2 === 1);
    let min = Math.min(...odd);
    let sum = odd.reduce((curr,acc) => curr + acc);
    answer.push(min, sum);

    return answer;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution1(arr));
console.log(solution2(arr));
