function solution1(str, spell){
    let answer = 0;
    for(let i of str) {
        if(str === spell) {
            answer++
        }
    }

    return answer;
}
function solution2(str, spell){
    let answer = 0
    let arr = str.split("")
    arr.forEach(curr => {
        if(curr === spell) {
            answer++
        }
    });
    return answer
}

console.log(solution1("COMPUTERPROGRAMMING","R"));
console.log(solution2("COMPUTERPROGRAMMING","R"));