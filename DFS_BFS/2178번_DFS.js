// let table = [
//   [1, 1, 0, 1, 1, 0],
//   [1, 1, 0, 1, 1, 0],
//   [1, 1, 1, 1, 1, 1],
//   [1, 1, 1, 1, 0, 1],
// ];
// let dp = Array.from({ length: 4 }, (v, i) => {
//   new Array(6);
// });

// let i = 0;
// let j = 0;

let table;
let visit;
let dp;
let row;
let col;
solution();

function solution() {
  const fs = require('fs');
  let input = fs
    // .readFileSync('/dev/stdin')
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');
  const [N, M] = input[0].split(' ').map(Number);
  row = N - 1;
  col = M - 1;
  // console.log(input);

  table = Array.from({ length: N }, (v, i) => new Array(M).fill(0));
  visit = Array.from({ length: M }, (v, i) => new Array(M).fill(false));

  for (let i = 1; i <= N; i++) {
    // console.log(input[i].split('').map(Number));
    table[i - 1] = input[i].split('').map(Number);
  }

  console.log(DFS(0, 0));
}

function DFS(n, m) {
  let result = Infinity;
  if (n === row && m === col) {
    return 1;
  }
  if (n < 0 || n > row || m < 0 || m > col) {
    return Infinity;
  }

  if (table[n][m] === 0) {
    return Infinity;
  }
  if (visit[n][m]) {
    return Infinity;
  }

  visit[n][m] = true;
  result = Math.min(DFS(n - 1, m), DFS(n + 1, m), DFS(n, m - 1), DFS(n, m + 1)) + 1;
  // result = Math.min(result, 1 + DFS(n - 1, m));

  // result = Math.min(result, 1 + DFS(n + 1, m));

  // result = Math.min(result, 1 + DFS(n, m - 1));

  // result = Math.min(result, 1 + DFS(n, m + 1));

  visit[n][m] = false;

  return result;
}
