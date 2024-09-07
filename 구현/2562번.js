function max(arr) {
  let max = 0;
  let maxIndex = 0;
  for (let i in arr) {
    if (max < arr[i]) {
      max = arr[i];
      maxIndex = i;
    }
  }
  let result = `${max}\n${Number(maxIndex) + 1}`;
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
    .split('\n')
    .map(Number);
  max(input);
}
