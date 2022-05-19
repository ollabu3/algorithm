function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(5));
/*
return 5 + sumRange(4)
           return 4 + sumRange(3)
                      return 3 + sumRange(2)
                                 return 2 + sumRange(1)
                                            return 1
                                            스택
*/
// node udemy/recursion/sumRange.js
