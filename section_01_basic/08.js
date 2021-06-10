function solution1(arr){
    let answer = arr; // 얕은복사
    let sum = arr.reduce((a,b) => a + b);

    for(let i =0; i < 8; i++) {
        for(let j = i + 1; j < 0; j++) {
            if(i + j === (sum - 100)) {
                arr.splice(j, 1)
                arr.splice(i, 1)
            }
        }
    }
    return answer
}

arr=[20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution1(arr));