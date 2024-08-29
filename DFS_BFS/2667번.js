function BFS(x, y, input, visit) {
  let dx = [-1, +1, 0, 0]; //상하좌우 순서
  let dy = [0, 0, -1, +1];
  let need_visit = [];
  let visit_count = 0;

  visit[x][y] = true;
  visit_count = 1;
  need_visit.push({ X: x, Y: y });

  while (need_visit.length != 0) {
    let dequeue = need_visit.shift();

    for (let i = 0; i < 4; i++) {
      let adjacent_x = dequeue.X + dx[i];
      let adjacent_y = dequeue.Y + dy[i];

      if (adjacent_x < 0 || adjacent_x >= visit.length || adjacent_y < 0 || adjacent_y >= visit.length) {
        continue;
      }
      if (input[adjacent_x][adjacent_y] == 0) {
        continue;
      }
      if (visit[adjacent_x][adjacent_y]) {
        continue;
      }
      visit[adjacent_x][adjacent_y] = true;
      need_visit.push({ X: adjacent_x, Y: adjacent_y });
      input[adjacent_x][adjacent_y] = input[dequeue.X][dequeue.Y] + 1;
      visit_count++;
    }
  }
  return visit_count;
}
function print(arr) {
  arr.sort((a, b) => {
    return a - b;
  });

  let answer = `${arr.length}\n`;
  for (let i in arr) {
    if (i == arr.length - 1) {
      answer += `${arr[i]}`;
    } else {
      answer += `${arr[i]}\n`;
    }
  }
  console.log(answer);
}

function buildingNum(input, n) {
  let visit = Array.from(Array(n), () => Array(n).fill(false));
  let count = 0;
  let result = [];

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (input[x][y] == 0) {
        continue;
      }
      if (visit[x][y] == true) {
        continue;
      }

      count = BFS(x, y, input, visit);
      result.push(count);
    }
  }
  print(result);
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
  const N = Number(input.shift());

  const newInput = new Array(N);

  for (let i = 0; i < N; i++) {
    newInput[i] = input[i].toString().split('').map(Number);
  }

  buildingNum(newInput, N);
}
