solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('');
  // console.log(input);
  input = input.sort();
  // console.log(input);
  palindrome(input);
}

function palindrome(input) {
  const obj = {};
  for (let i in input) {
    if (obj[input[i]] === undefined) {
      obj[input[i]] = 1;
    } else {
      obj[input[i]]++;
    }
  }

  const arr = Object.values(obj);
  let count = 0;

  //아닌경우
  //input의 개수가 짝수이고 알파벳중 홀수개가 있는경우 또는 홀수가 2개인경우
  for (let i in arr) {
    if (arr[i] % 2 !== 0) {
      count++;
    }
    if ((input.length % 2 === 0 && arr[i] % 2 !== 0) || count > 1) {
      return console.log(`I'm Sorry Hansoo`);
    }
  }
  //맞는경우

  let oddNumkey = ''; //홀수인거 저장하기!

  let keys = Object.keys(obj);
  keys.sort();
  let result = [];

  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] % 2 === 0) {
      obj[keys[i]] = Math.floor(obj[keys[i]] / 2);
      for (let j = 1; j <= obj[keys[i]]; j++) {
        result.push(keys[i]);
      }
    } else {
      oddNumkey = keys[i];
      obj[keys[i]] = Math.floor((obj[keys[i]] - 1) / 2);
      for (let j = 1; j <= obj[keys[i]]; j++) {
        result.push(keys[i]);
      }
    }
  }

  const lastIndex = result.length - 1;
  for (let i = lastIndex; i >= 0; i--) {
    result.push(result[i]);
  }
  //홀수인거 중간에 넣기
  if (oddNumkey !== '') {
    const index = Math.floor(input.length / 2);
    result.splice(index, 0, oddNumkey);
  }

  let answer = '';
  answer += result.join('');
  console.log(answer);
}
