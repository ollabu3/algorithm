// function factorial(num) {
//   let total = 1;
//   for (let i = num; i > 0; i--) {
//     total *= i;
//   }
//   return total;
// }

function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

/*
return 4 * factorial(3)
           return 3 * factorial(2)
                      return 2 * factorial(1);
                                 return 1;
*/
console.log(factorial(5));
// node udemy/recursion/factorial.js
