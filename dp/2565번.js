//전깃줄
//a가 오름차순일때 b의 가장 긴 증가하는 부분수열 구하면됨.
//a도 커지고 b 도 커지면 평행하므로 겹치치 않음. 이를 제외한 전깃줄 개수 구하면됨.

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const n = Number(input[0]);
  let dp = Array(n);
  let arrA = [];
  for (let i = 1; i <= n; i++) {
    arrA.push(input[i].split(' ').map(Number));
  }
  arrA.sort((a, b) => {
    return a[0] - b[0];
  });
  let arrB = [];
  for (let i in arrA) {
    arrB.push(arrA[i][1]);
  }
  // console.log(arrA);
  // console.log(arrB);
  dp[0] = 1;
  let long = 1;
  for (let i = 1; i < n; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arrB[i] > arrB[j]) {
        max = Math.max(max, dp[j]);
      }
    }
    dp[i] = max + 1;
    long = Math.max(long, dp[i]);
  }
  console.log(arrB.length - long);
}
solution();
