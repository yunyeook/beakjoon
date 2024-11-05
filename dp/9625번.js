function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const num = Number(input[0]);
  let a = [0, 0];
  let b = [0, 1];
  if (num == 1) {
    return console.log('0 1');
  } else {
    for (let i = 2; i <= num; i++) {
      if (i == 2) {
        a.push(1);
      } else {
        a.push(a[i - 2] + a[i - 1]);
      }

      b.push(b[i - 2] + b[i - 1]);
    }
    return console.log(`${a[num]} ${b[num]}`);
  }
}
solution();
