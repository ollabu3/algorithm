function solution1(s) {
    let answer = ""
    for(let i of s) {
        if(i === i.toLowerCase()) {
            answer += i.toUpperCase()
        } else {
            answer += i
        }
    } 

    return answer
}
function solution2(s) {
    return s.toUpperCase()
}
let s = "ItisTimeToStudy"
console.log(solution1(s))
console.log(solution2(s))