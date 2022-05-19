function countDown(num) {
  if (num <= 0) {
    return "All done!";
  }
  console.log("print num ===", num);
  num--;
  countDown(num);
}

// function countDown(num) {
//   for (let i = num; i > 0; i--) {
//     console.log(i);
//   }
//   console.log("All done!");
// }

console.log(countDown(5));

// node udemy/recursion/countDown.js
