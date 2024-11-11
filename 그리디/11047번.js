function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  let [n, k] = input[0].split(' ').map(Number);
  let count = 0;
  while (k > 0) {
    for (let i = n; i >= 0; i--) {
      let coin = Number(input[i]);
      let share = Math.floor(k / coin);
      let rest = k % coin;
      if (share > 0) {
        count += share;
        k = rest;
      }
      if (k == 0) {
        break;
      }
    }
  }
  console.log(count);
}
solution();
