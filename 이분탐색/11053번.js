function solution() {
  const fs = require('fs');
  let input = fs
    .readFileSync('/dev/stdin')
    // .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const n = Number(input[0]);
  if (n == 1) {
    return console.log(1);
  }
  input = input[1].split(' ').map(Number);
  let arr = [];

  for (let i = 0; i < n; i++) {
    let num = input[i];
    if (arr.length == 0 || arr[arr.length - 1] < num) {
      arr.push(num);
      continue;
    }
    if (arr[0] >= num) {
      arr[0] = num;
      continue;
    }

    let inserted = binarySearch(arr, num);
    arr[inserted] = num;
  }
  return console.log(arr.length);
}
solution();

function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (start < end) {
    mid = Math.floor((start + end) / 2);
    if (num == arr[mid]) {
      return mid;
    } else if (num < arr[mid]) {
      end = mid - 1;
      if (arr[end] < num) {
        return mid;
      }
    } else if (arr[mid] < num) {
      start = mid + 1;
      if (num < arr[start]) {
        return start;
      }
    }
  }
}
