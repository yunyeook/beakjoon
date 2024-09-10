function mean(arr) {
  //산술평균
  let result = 0;
  for (let i in arr) {
    result += arr[i];
  }
  return Math.round(result / arr.length);
}

function median(arr) {
  //중앙값
  return arr[(arr.length - 1) / 2];
}

function mode(arr) {
  //최빈값
  let obj = {};
  for (let i in arr) {
    if (obj[arr[i]] == null) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  let objArr = Object.entries(obj);

  if (objArr.length > 1) {
    objArr.sort((a, b) => {
      return a[0] - b[0];
    });
    objArr.sort((a, b) => {
      return b[1] - a[1];
    });
    if (objArr[0][1] == objArr[1][1]) {
      return objArr[1][0];
    } else {
      return objArr[0][0];
    }
  } else {
    return objArr[0][0];
  }
}
function range(arr) {
  //범위 : 최대-최소
  return arr[arr.length - 1] - arr[0];
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
  input.shift();

  input.sort((a, b) => {
    return a - b;
  });
  let result = '';
  result += `${mean(input)}\n${median(input)}\n${mode(input)}\n${range(input)}`;
  console.log(result);
}
