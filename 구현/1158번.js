function Jesephus(N, K) {
  let arr = [];
  let result = '<';
  for (let i = 1; i <= N; i++) {
    arr.push(i);
  }

  while (arr.length > 0) {
    for (let i = 1; i < K; i++) {
      arr.push(arr.shift());
    }
    if (arr.length == 1) {
      result += `${arr.shift()}>`;
    } else {
      result += `${arr.shift()}, `;
    }
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
    .split(' ')
    .map(Number);
  Jesephus(input[0], input[1]);
}
