solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');
  const [N, M, B] = input.shift().toString().trim().split(' ').map(Number);
  const arr = Array.from(Array(N), () => Array(M));
  for (let i in arr) {
    arr[i] = input.shift().toString().trim().split(' ').map(Number);
  }
  Minecraft(N, M, B, arr);
}

function Minecraft(N, M, B, arr) {
  let min = { seconds: Infinity, height: Infinity };
  let minHeight = Infinity;
  let sum = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      sum += arr[i][j];
      if (arr[i][j] < minHeight) {
        minHeight = arr[i][j];
      }
    }
  }
  sum += B;
  let maxHeight = Math.floor(sum / (N * M));
  for (let h = maxHeight; h >= minHeight; h--) {
    let seconds = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (arr[i][j] > h) {
          seconds += (arr[i][j] - h) * 2;
        } else if (arr[i][j] < h) {
          seconds += (h - arr[i][j]) * 1;
        }
      }
    }

    if (seconds < min.seconds) {
      min.seconds = seconds;
      min.height = h;
    } else if (seconds === min.seconds) {
      if (h > min.height) {
        min.height = h;
      }
    }
  }
  console.log(`${min.seconds} ${min.height}`);
}
