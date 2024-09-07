function star(N) {
  let result = '';
  for (let i = 0; i < N; i++) {
    for (let j = 0; j <= i; j++) {
      result += '*';
    }
    if (i != N - 1) result += `\n`;
  }
  console.log(result);
}

solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);

  star(input);
}
