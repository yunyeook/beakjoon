function newComer(arr) {
  if (arr.length <= 1) {
    return 1;
  } else {
    let max_y = arr[0][1];
    let count = 1;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i][1] <= max_y) {
        count++;
        max_y = arr[i][1];
      } else {
        continue;
      }
    }
    return count;
  }
}

solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync('/dev/stdin')
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');
  // console.log(input);

  for (let i in input) {
    input[i] = input[i].toString().trim().split(' ').map(Number);
  }
  // console.log(input);
  // console.log(input[2][0]);
  let caseCountIndex = 1;
  while (caseCountIndex < input.length) {
    let arr = [];
    for (let i = 1; i <= input[caseCountIndex]; i++) {
      arr.push(input[caseCountIndex + i]);
    }

    caseCountIndex = Number(caseCountIndex) + Number(input[caseCountIndex]) + 1;
    arr.sort((a, b) => {
      return a[0] - b[0];
    });

    // console.log(newArr);
    console.log(newComer(arr));
  }
}
