solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');
  input.shift();
  AC(input);
}
function AC(input) {
  for (let i = 0; i < input.length; i += 3) {
    let fn = input[i].split('');
    let integerArr = input[i + 2].replace('[', '').replace(']', '').split(',').map(Number);
    let first = true; //index가 0이 맨앞인경우 ==true // 맨끝이 맨앞인경우 ==false
    let error = false;
    let count = Number(input[i + 1]);
    for (let j in fn) {
      if (fn[j] === 'R') {
        if (first) {
          first = false;
        } else {
          first = true;
        }
      } else if (fn[j] === 'D') {
        if (count === 0) {
          error = true;
          break;
        } else {
          if (first) {
            integerArr.shift();
          } else {
            integerArr.pop();
          }
          count--;
        }
      }
    }

    if (error) {
      console.log('error');
    } else if (count === 0 && error === false) {
      console.log('[]');
    } else {
      let result = '[';
      if (first) {
        for (let i = 0; i <= integerArr.length - 1; i++) {
          if (i === integerArr.length - 1) {
            result += `${integerArr[i]}]`;
          } else {
            result += `${integerArr[i]},`;
          }
        }
      } else {
        for (let i = integerArr.length - 1; i >= 0; i--) {
          if (i === 0) {
            result += `${integerArr[i]}]`;
          } else {
            result += `${integerArr[i]},`;
          }
        }
      }
      console.log(result);
    }
  }
}
