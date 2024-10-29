function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  let N = Number(input[0]);
  let newInput = input[1].split(' ').map(Number);
  let arr = []; //arr배열을 이분탐색하기
  for (let i = 0; i < N; i++) {
    let num = newInput[i];
    if (i == 0 || arr[arr.length - 1] < num) {
      arr.push(num);
    } else {
      let startIndex = 0;
      let endIndex = arr.length - 1;
      let midIndex;
      while (startIndex < endIndex) {
        midIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
        if (arr[midIndex] == num) {
          break;
        }
        if (arr[midIndex] > num) {
          if (endIndex == midIndex) {
            endIndex = midIndex - 1;
          } else {
            endIndex = midIndex;
          }
        } else if (arr[midIndex] < num) {
          if (startIndex == midIndex) {
            startIndex = midIndex + 1;
          } else {
            startIndex = midIndex;
          }
        }
        if (endIndex - startIndex == 1 && arr[startIndex] < num && arr[endIndex] > num) {
          arr[endIndex] = num;
          break;
        }
      }
      if (arr[midIndex] == num) {
        continue;
      } else if (startIndex == endIndex) {
        arr[startIndex] = num;
      }
    }
  }
  console.log(arr.length);
}
solution();
