function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');
  let [R, C, N] = input.shift().split(' ').map(Number);
  let arrO = [];
  for (let i in input) {
    input[i] = input[i].split('');
  }
  O(arrO, input, R, C);

  if (N === 0 || N === 1) {
    console.log(printResult(input, R));
    return;
  }
  if (N % 2 === 0) {
    let allZero = Array.from(Array(R), () => Array(C).fill('O'));
    console.log(printResult(allZero, R));
    return;
  }

  for (let i = 0; i <= N; i++) {
    if (i === 0 || i === 1) {
      continue;
    } else if (i % 2 === 0) {
      fill(input, R, C);
    } else {
      bomb(arrO, input, R, C);
      O(arrO, input, R, C);
    }
  }
  console.log(printResult(input, R));
}
//O의 숫자좌표 저장하기
function O(arrO, input, R, C) {
  arrO.length = 0;
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (input[i][j] == 'O') {
        arrO.push(i * C + j);
      }
    }
  }
}
//---폭탄 터트리기 ------
function bomb(arrO, input, R, C) {
  let dx = [-1, +1, 0, 0];
  let dy = [0, 0, -1, +1];
  for (let i in arrO) {
    let x = Math.floor(arrO[i] / C);
    let y = arrO[i] % C;
    input[x][y] = '.';

    for (let j = 0; j < 4; j++) {
      let adjacentX = x + dx[j];
      let adjacentY = y + dy[j];
      if (adjacentX < 0 || adjacentX >= R || adjacentY < 0 || adjacentY >= C) {
        continue;
      } else if (input[adjacentX][adjacentY] == '.') {
        continue;
      } else {
        input[adjacentX][adjacentY] = '.';
      }
    }
  }
}
//폭탄 채우기
function fill(input, R, C) {
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (input[i][j] == '.') {
        input[i][j] = 'O';
      } else {
        continue;
      }
    }
  }
}

function printResult(arr, R) {
  let result = '';
  for (let i in arr) {
    if (i == R - 1) {
      result += `${arr[i].join('')}`;
    } else {
      result += `${arr[i].join('')}\n`;
    }
  }
  return result;
}
solution();
