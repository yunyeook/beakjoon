function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const [m, n] = input[0].split(' ').map(Number);
  let numArr = Array(n + 1).fill(true);
  for (let i = 0; i < m; i++) {
    numArr[i] = false;
  }
  /*1인 경우 소수가 아니므로 무조건 예외시켜야한다.!!! */
  if (m == 1) {
    numArr[m] = false;
  }
  // console.log(numArr);
  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= n; j++) {
      let removeNum = i * j;
      if (removeNum > n) {
        break;
      }
      if (numArr[removeNum]) {
        numArr[removeNum] = false;
      }
    }
  }
  let result = '';
  for (let i in numArr) {
    if (numArr[i]) {
      result += `${i}\n`;
    }
  }
  console.log(result.slice(0, -1));
}
solution();
