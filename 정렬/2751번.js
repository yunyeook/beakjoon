function solution() {
  const fs = require('fs');
  let input = fs
    // .readFileSync('/dev/stdin')
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');

  const n = Number(input[0]);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(input[i]);
  }
  arr.sort((a, b) => {
    return b - a;
  });
  let result = arr.join('\n');
  console.log(result);
}
solution();
