function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const N = Number(input[0]);
  let newInput = input[1].split(' ').map(Number);
  let visitIndex = new Set();
  let headIndex = 0;
  let tailIndex = N - 1;
  let currentIndex = 0;
  let result = '';
  while (visitIndex.size < N) {
    visitIndex.add(currentIndex);
    result += `${currentIndex + 1} `;
    if (visitIndex.has(headIndex)) {
      headIndex++;
      while (true) {
        if (visitIndex.has(headIndex)) {
          headIndex++;
        } else {
          break;
        }
      }
    }
    if (visitIndex.has(tailIndex)) {
      tailIndex--;
      while (true) {
        if (visitIndex.has(tailIndex)) {
          tailIndex--;
        } else {
          break;
        }
      }
    }

    if (headIndex == tailIndex) {
      result += `${headIndex + 1}`;
      break;
    }
    let move = newInput[currentIndex];
    if (move > 0) {
      for (let n = 1; n <= move; n++) {
        currentIndex++;
        if (currentIndex == N) {
          currentIndex = headIndex;
        }
        if (visitIndex.has(currentIndex)) {
          n--;
        }
      }
    } else {
      for (let p = move; p < 0; p++) {
        currentIndex--;
        if (currentIndex == -1) {
          currentIndex = tailIndex;
        }
        if (visitIndex.has(currentIndex)) {
          p--;
        }
      }
    }
  }
  result.slice(0, -1);
  console.log(result);
}
solution();
