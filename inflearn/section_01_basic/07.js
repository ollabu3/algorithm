
function solution1(day, arr){
    let answer = 0;
    for(let x of arr) {
        if(x % 10 === day) answer++;
    }

    return answer;
}
function solution2(day, arr){
    let count = 0
    arr.filter((curr) => curr % 10 === day).forEach(() => count++)

    return count
}

arr=[25, 23, 11, 47, 53, 17, 33];
console.log(solution1(3, arr));
console.log(solution2(3, arr));