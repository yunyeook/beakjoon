function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const N = Number(input[0]);
  const quit = N + 1;
  let dp = Array(quit).fill(0);

  //선택했을때 안했을때
  let maxSum = 0;
  for (let i = 1; i <= N; i++) {
    input[i] = input[i].split(' ').map(Number);

    let preMax = 0;
    if (quit - i >= input[i][0]) {
      for (let j = i - 1; j > 0; j--) {
        if (i - j >= input[j][0]) {
          preMax = Math.max(preMax, dp[j]);
        }
      }
      dp[i] = preMax + input[i][1];
    }
    maxSum = Math.max(maxSum, dp[i]);
  }
  console.log(maxSum);
}
solution();
