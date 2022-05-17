function areThereDuplicates(...args) {
  //방법 1) 빈도수 세기 패턴

  let counter = {};
  for (let i = 0; i < args.length; i++) {
    let item = args[i];
    counter[item] = (counter[item] || 0) + 1;
  }
  for (let key in counter) {
    if (counter[key] > 1) return true;
  }
  return false;
}

// function areThereDuplicates(...args) {
//   //방법 2) 다중 포인터
//   args.sort(function (a, b) {
//     if (a > b) return 1;
//     else if (b > a) return -1;
//     else return 0;
//   });
//   let start = 0;
//   let next = 1;
//   while (next < args.length) {
//     if (args[start] === args[next]) {
//       return true;
//     } else {
//       next++;
//       start++;
//     }
//   }
//   return false;
// }

// function areThereDuplicates() {
//   // 방법 3) One Liner 솔루션
//   return new Set(arguments).size !== arguments.length;
// }

console.log(areThereDuplicates(1, 3, 2)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

// node udemy/solving_pattern/areThereDuplicates.js
