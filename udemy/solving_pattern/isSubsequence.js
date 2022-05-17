function isSubsequence(str1, str2) {
  // str1이 str2문자에 포함이 돼 있는지
  // 다중 포인터 패턴
  if (str1.length > str2.length) return false;
  let start = 0;
  while (start <= str2.length) {
    if (str1 === str2.slice(start, start + 3)) return true;
    else start++;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("abc", "abracadabra")); // false
//  node udemy/solving_pattern/isSubsequence.js
