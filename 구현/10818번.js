function result(arr) {
  let min = null;
  let max = null;
  let result = '';
  for (let i in arr) {
    if (min == null && max == null) {
      min = arr[0];
      max = arr[0];
    } else {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  }
  result = `${min} ${max}`;
  console.log(result);
}

solution();
function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');
  const N = Number(input[0]);
  let newInput = input[1].split(' ').map(Number);
  result(newInput);
}
