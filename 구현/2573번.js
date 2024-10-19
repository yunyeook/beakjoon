function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync('/dev/stdin')
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');
  const [N, M] = input.shift().split(' ').map(Number);

  let startIce = new Set();

  for (let i = 0; i < N; i++) {
    input[i] = input[i].split(' ').map(Number);
    for (let j = 0; j < M; j++) {
      if (input[i][j] !== 0) {
        startIce.add(M * i + j);
      }
    }
  }
  let years = 0;
  const dx = [-1, +1, 0, 0]; //상하좌우
  const dy = [0, 0, -1, +1];

  //녹이기
  function melt() {
    let melting = {};
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (input[i][j] == 0) {
          continue;
        }
        for (let d = 0; d < 4; d++) {
          let adjx = i + dx[d];
          let adjy = j + dy[d];
          if (adjx < 0 || adjy < 0 || adjx >= N || adjy >= M) {
            continue;
          }
          if (input[adjx][adjy] == 0) {
            let key = i * M + j;
            if (melting[key] == null) {
              melting[key] = 1;
            } else {
              melting[key]++;
            }
          }
        }
      }
    }
    years++;

    for (let k in melting) {
      k = Number(k);
      let x = Math.floor(k / M);
      let y = k % M;
      if (input[x][y] > melting[k]) {
        input[x][y] = input[x][y] - melting[k];
      } else {
        input[x][y] = 0;
        startIce.delete(k);
      }
    }
  }
  //빙산 연결되었는지 확인하기!
  function isConnected() {
    let visit = new Set();
    let needToVisitSet = new Set();
    let start = startIce.keys().next().value;

    let head = -1;
    let lastIndex = 0;
    let needToVisit = [];
    needToVisit.push(start);
    lastIndex = needToVisit.length - 1;
    while (head < lastIndex) {
      head++;
      if (needToVisit.length - 1 < head) {
        break;
      }
      let dequeue = needToVisit[head];
      let x = Math.floor(dequeue / M);
      let y = dequeue % M;
      for (let d = 0; d < 4; d++) {
        let adjx = x + dx[d];
        let adjy = y + dy[d];
        let adj = adjx * M + adjy;
        if (adjx < 0 || adjy < 0 || adjx >= N || adjy >= M) {
          continue;
        }
        if (visit.has(adj) || needToVisitSet.has(adj)) {
          continue;
        }
        if (input[adjx][adjy] == 0) {
          continue;
        }
        needToVisit.push(adj);
        needToVisitSet.add(adj);
      }
      visit.add(dequeue);
      lastIndex = needToVisit.length - 1;
    }
    return visit.size;
  }
  melt();
  let result = isConnected();

  while (result == startIce.size) {
    melt();
    if (startIce.size == 0) {
      break;
    }
    result = isConnected();
  }

  if (startIce.size == 0) {
    console.log(0);
  } else {
    console.log(years);
  }
}
solution();

class Node {
  constructor(num) {
    this.num = num;
    this.next = null;
  }
}
