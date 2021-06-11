function solution1(s) {
    let answer = 0 
    for(let i of s) {
        if(i === i.toUpperCase()) {
            answer++
        }
    }
    return answer
}
function solution2(s) {
    let count = 0 
    let arr = s.split("")
    arr.forEach((curr)=> {
        if(curr.charCodeAt(0) === curr.toUpperCase().charCodeAt(0)) {
            count++
        }
    });
return count
}
let s = "KoreaTimeGood"
console.log(solution1(s))
console.log(solution2(s))