solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');

  let arr = [];
  input.shift();
  let result = '';

  for (let i in input) {
    input[i] = input[i].split(' ');
    if (input[i][0] === 'push') {
      arr.push(Number(input[i][1]));
    } else if (input[i][0] === 'pop') {
      if (arr.length !== 0) {
        result += `${arr.pop()}\n`;
      } else {
        result += `${-1}\n`;
      }
    } else if (input[i][0] === 'size') {
      result += `${arr.length}\n`;
    } else if (input[i][0] === 'empty') {
      if (arr.length === 0) {
        result += `${1}\n`;
      } else {
        result += `${0}\n`;
      }
    } else if (input[i][0] === 'top') {
      if (arr.length !== 0) {
        result += `${arr[arr.length - 1]}\n`;
      } else {
        result += `${-1}\n`;
      }
    }
  }
  result = result.substring(0, result.length - 1);
  console.log(result);
}
