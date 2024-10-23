solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');

  const n = Number(input[0])
  let dp = Array.from(Array(n + 1), () => {
    return Array(3)
  })
  dp[0][0] = 0
  dp[0][1] = 0
  dp[0][2] = 0
  for (let i = 1; i <= n; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2])
    dp[i][1] = dp[i - 1][0] + Number(input[i])
    dp[i][2] = dp[i - 1][1] + Number(input[i])
  }
  let result = Math.max(dp[n][0], dp[n][1], dp[n][2])
  console.log(result)
}