function ATM(input) {
  input.sort(function (a, b) {
    return a - b;
  });

  let result = 0;
  let newInput = [];
  let answer = 0;

  for (let i = 0; i < input.length; i++) {
    result += input[i];
    newInput.push(result);
    answer += newInput[i];
  }
  console.log(answer);
}

solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');

  let reInput = input[1].split(' ').map(Number);
  ATM(reInput);
}
