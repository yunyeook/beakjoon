function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  let negative = [];
  let positive = [];
  let zerocount = 0;
  let n = Number(input[0]);
  for (let i = 1; i <= n; i++) {
    let num = Number(input[i].trim());
    if (num == 0 && zerocount == 0) {
      zerocount = 1;
    } else if (num < 0) {
      negative.push(num);
    } else {
      positive.push(num);
    }
  }

  let negLength = negative.length;
  if (negLength > 1) {
    //-3,-2,-1순
    negative.sort((a, b) => {
      return a - b;
    });
  }
  let negSum = 0;
  let isnegeven = negLength % 2 == 0 ? true : false;
  let negOdd = null;
  if (!isnegeven) {
    negOdd = negative.pop();
    negLength--;
  }

  if (negLength > 1) {
    for (let i = 0; i < negLength; i += 2) {
      negSum += negative[i] * negative[i + 1];
    }
  }

  let posLength = positive.length;
  if (posLength > 1) {
    positive.sort((a, b) => {
      return b - a;
    });
  }
  let posSum = 0;
  let isposeven = posLength % 2 == 0 ? true : false;
  let posOdd = null;

  if (!isposeven) {
    posOdd = positive.pop();
    posLength--;
  }
  if (posLength > 1) {
    for (let i = 0; i < posLength; i += 2) {
      let r = Math.max(positive[i] + positive[i + 1], positive[i] * positive[i + 1]);
      posSum += r;
    }
  }

  let result = negSum + posSum;
  if (negOdd) {
    if (zerocount == 0) {
      result += negOdd;
    }
  }
  if (posOdd) {
    result += posOdd;
  }

  console.log(result);
  // console.log(posSum);
  // console.log(negSum);
  // console.log(positive);
}
solution();
