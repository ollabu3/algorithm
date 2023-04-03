/*
프로그래머스 롤케이크 자르기
https://school.programmers.co.kr/learn/courses/30/lessons/132265
출처 : 프로그래머스
*/

function solution(topping) {
    var answer = 0;
    let bro = new Set()
    let me = {}
    let check = 0 // 내가 가지고 있는 토핑 종류
    // 나 셋팅
    for(let i = 0 ; i< topping.length ; i++){
        if(me[topping[i]]){
            me[topping[i]]++
        } else {
            me[topping[i]] = 1
            check++
        }
    }

    // console.log(me)
    // 형에게 전달
    for(let i = 0 ; i< topping.length ; i++){
        bro.add(topping[i])
        me[topping[i]] -= 1
        if (me[topping[i]] ==0){
            check --
        }
        if(bro.size == check){
            answer ++
        }
    }
    return answer;
} 

console.log(solution([1, 2, 1, 3, 1, 4, 1, 2])) // 2
console.log(solution([[1, 2, 3, 1, 4]])) // 0

//  node study/roll-cake.js
