solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');
  const N = Number(input.shift());
  let arr = Array.from(Array(N), () => Array(N));

  for (let i in input) {
    arr[i] = input[i].split('');
  }
  candy(N, arr);
}
function candy(N, arr) {
  let maxCount = 1;
  const dx = [1, 0]; //아래,우측
  const dy = [0, 1];
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      for (let j = 0; j < 2; j++) {
        let adjacentX = x + dx[j];
        let adjacentY = y + dy[j];

        if (adjacentX >= N || adjacentY >= N) {
          continue;
        }

        change(arr, x, y, adjacentX, adjacentY);
        let maxRow = longestRow(N, arr);
        let maxCol = longestCol(N, arr);
        maxCount = Math.max(maxCount, maxRow, maxCol);
        change(arr, x, y, adjacentX, adjacentY);
      }
    }
  }
  console.log(maxCount);
}
function longestRow(N, arr) {
  let longest = 1;
  let currentLength = 1;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (j + 1 > N - 1) {
        break;
      }

      if (arr[i][j] === arr[i][j + 1]) {
        currentLength++;
      } else {
        longest = Math.max(longest, currentLength);
        currentLength = 1;
      }
    }
    longest = Math.max(longest, currentLength);
    currentLength = 1;
  }
  return longest;
}
function longestCol(N, arr) {
  let longest = 1;
  let currentLength = 1;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (j + 1 > N - 1) {
        break;
      }
      if (arr[j][i] === arr[j + 1][i]) {
        currentLength++;
      } else {
        longest = Math.max(longest, currentLength);
        currentLength = 1;
      }
    }
    longest = Math.max(longest, currentLength);
    currentLength = 1;
  }
  return longest;
}

function change(arr, x, y, adjacentX, adjacentY) {
  let tmp = arr[x][y];
  arr[x][y] = arr[adjacentX][adjacentY];
  arr[adjacentX][adjacentY] = tmp;
}
