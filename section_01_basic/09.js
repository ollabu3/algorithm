function solution1(str){
    let answer = str;
    answer = answer.replace(/A/g, "#");

    return answer;
}

console.log(solution1("BANANA"));