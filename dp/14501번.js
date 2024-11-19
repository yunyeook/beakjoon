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
  let dp = Array(quit).fill(0); //해당 날짜의 최댓값 저장

  let maxSum = 0;
  for (let i = 1; i <= N; i++) {
    input[i] = input[i].split(' ').map(Number);

    let preMax = 0;
    if (quit - i >= input[i][0]) {
      for (let j = i - 1; j > 0; j--) {
        //dp테이블의 이전 날짜들을 순회함.
        if (i - j >= input[j][0]) {
          //이전 날짜들중 최댓값을 저장할건데 만약 일이 안끝난경우는 skip함.
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
