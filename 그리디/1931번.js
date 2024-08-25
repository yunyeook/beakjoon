solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync('/dev/stdin')
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');
  let reInput = [];
  for (let i = 1; i < input.length; i++) {
    reInput.push(input[i].split(' ').map(Number));
  }

  reInput.sort((a, b) => {
    if (a[1] == b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  // console.log(reInput);
  assignedMeetingRoon(reInput);
}

function assignedMeetingRoon(arr) {
  let endTime = 0;
  let count = 0;
  let selected = [];

  for (let i in arr) {
    //for(let i = 0; i<arr.length;i++) 도 맞음.
    if (arr[i][0] >= endTime) {
      count++;
      endTime = arr[i][1];
      // selected.push(arr[i]);
    }
  }
  console.log(count);
  //  console.log(selected);
}
