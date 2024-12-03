function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  let count = 0;
  let indexSet = new Set();
  let str = String(input[0].trim());
  let curChar = 'q';
  let iscontinue = true;
  let isChange = false;
  while (iscontinue) {
    for (let i = 0; i < str.length; i++) {
      if (indexSet.has(i)) {
        continue;
      }
      if (!indexSet.has(i) && str.charAt(i) == curChar) {
        if (curChar == 'q') {
          indexSet.add(i);
          curChar = 'u';
        } else if (curChar == 'u') {
          indexSet.add(i);
          curChar = 'a';
        } else if (curChar == 'a') {
          indexSet.add(i);
          curChar = 'c';
        } else if (curChar == 'c') {
          indexSet.add(i);
          curChar = 'k';
        } else if (curChar == 'k') {
          indexSet.add(i);
          isChange = true;
          curChar = 'q';
        }
      }
    }

    if (indexSet.size % 5 != 0) {
      iscontinue = false;
    } else {
      if (isChange) {
        isChange = false;
        count++;
        if (indexSet.size == str.length) {
          iscontinue = false;
        }
      } else {
        iscontinue = false;
      }
    }
  }
  if (indexSet.size == str.length && count != 0 && indexSet.size % 5 == 0) {
    console.log(count);
  } else {
    console.log(-1);
  }
}
solution();
