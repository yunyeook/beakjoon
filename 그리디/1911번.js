function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const [n, l] = input[0].split(' ').map(Number);
  for (let i = 1; i < input.length; i++) {
    input[i - 1] = input[i].split(' ').map(Number);
    input[i - 1][1]--;
  }
  input.pop();
  input.sort((a, b) => {
    return a[0] - b[0];
  });

  let total = 0;
  let start = input[0][0];
  let last;
  let index = 0;
  let max = input[input.length - 1][1];
  while (start <= max) {
    last = start + l - 1;
    total++;
    if (last >= max) {
      break;
    }
    start = last + 1;
    if (start > input[index][1]) {
      for (let i = index + 1; i < input.length; i++) {
        index = i;
        if (start < input[i][0]) {
          start = input[i][0];
          break;
        }
        if (start >= input[i][0] && start <= input[i][1]) {
          break;
        }
      }
    }
  }
  console.log(total);
}
solution();
