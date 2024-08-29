solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync('/dev/stdin')
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');
  const [N, M] = input.shift().split(' ').map(Number);
  const newInput = new Array([N, M][0]);
  for (let i in input) {
    newInput[i] = input[i].toString().split('').map(Number);
  }

  BFS(newInput, [N, M][0], [N, M][1]);
}

function BFS(input, N, M) {
  let visit = Array.from({ length: N }, (v, i) => new Array(M));

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      visit[i][j] = false;
    }
  }

  let need_visit = [];
  //        상, 하, 좌, 우
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];

  visit[0][0] = true;
  need_visit.push({ x: 0, y: 0 });

  while (need_visit.length != 0) {
    let dequeue = need_visit.shift();

    for (let i = 0; i < 4; i++) {
      let adjacent_x = dequeue.x + dx[i];
      let adjacent_y = dequeue.y + dy[i];

      if (adjacent_x < 0 || adjacent_y < 0 || adjacent_x >= N || adjacent_y >= M) {
        continue;
      }

      if (input[adjacent_x][adjacent_y] == 0) {
        continue;
      }
      if (visit[adjacent_x][adjacent_y]) {
        continue;
      }

      need_visit.push({ x: adjacent_x, y: adjacent_y });
      visit[adjacent_x][adjacent_y] = true;
      input[adjacent_x][adjacent_y] = input[dequeue.x][dequeue.y] + 1;

      //  console.log(input);
    }
  }
  console.log(visit);
  console.log(input);
  console.log(input[N - 1][M - 1]);
}
ial;
