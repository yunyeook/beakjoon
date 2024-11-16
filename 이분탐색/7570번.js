//n - (1씩 증가하는 최장 수열의 길이)
// 그냥 LIS를 구하면 결국 그 사이에 다른 숫자가 들어갈 수 있으므로 구한 LIS요소를 결국 옮겨야 한다..
function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const n = Number(input[0]);
  if (n == 1) {
    return console.log(0);
  }
  input = input[1].split(' ').map(Number);
  let dp = Array(n + 1).fill(0);
  //dp는 해당 숫자가 1씩증가하는 LIS의 마지막 숫자라면 이전거에 +1해서 구하면됨.
  let max = 1;
  for (let i in input) {
    let num = input[i];
    dp[num] = dp[num - 1] + 1;
    max = Math.max(max, dp[num]);
  }
  console.log(n - max);
}
solution();
