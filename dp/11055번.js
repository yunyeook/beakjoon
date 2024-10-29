function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const N = Number(input[0]);
  let newInput = input[1].split(' ').map(Number);
  let dp = Array(N);
  let maxsum = 0;
  for (let i = 0; i < N; i++) {
    let num = newInput[i];
    if (i == 0) {
      dp[i] = num;
      maxsum += num;
    } else {
      let max = 0;
      for (let j = i - 1; j >= 0; j--) {
        if (newInput[j] < num) {
          max = Math.max(max, dp[j]);
        }
      }
      dp[i] = max + newInput[i];
      maxsum = Math.max(maxsum, dp[i]);
    }
  }
  console.log(maxsum);
}
solution();
