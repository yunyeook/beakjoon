solution();
function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split(' ');
  // console.log(input);
  if (input == '') {
    console.log(0);
  } else {
    console.log(input.length);
  }
}
