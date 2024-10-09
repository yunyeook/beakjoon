function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');
  let [N, L, R] = input.shift().split(' ').map(Number);
  for (let i = 0; i < N; i++) {
    input[i] = input[i].split(' ').map(Number);
  }
  let result;
  let migration = 0;
  do {
    result = union(input, N, L, R);
    if (result) {
      migration++;
    }
  } while (result);
  console.log(migration);
}
function union(input, N, L, R) {
  let dx = [-1, +1, 0, 0];
  let dy = [0, 0, -1, +1];

  let united = Array.from(Array(N), () => Array(N).fill(false));
  let migrationCount = 0;
  //첨부터 끝까지 인구이동 있는지 확인하기
  let newInput = Array.from(Array(N), () => Array(N).fill(null));
  for (let currentx = 0; currentx < N; currentx++) {
    for (let currenty = 0; currenty < N; currenty++) {
      let current = currentx * N + currenty;
      if (united[currentx][currenty]) {
        continue;
      } else {
        let visit = new Set();
        let need_to_visit = [];
        let needToVisit = new Set();
        need_to_visit.push(current);
        let sum = 0;
        while (need_to_visit.length > 0) {
          let dequeue = need_to_visit.shift();
          let x = Math.floor(dequeue / N);
          let y = dequeue % N;
          visit.add(dequeue);
          last = input[x][y];
          sum += input[x][y];

          for (let i = 0; i < 4; i++) {
            let adjx = x + dx[i];
            let adjy = y + dy[i];
            let adj = adjx * N + adjy;

            if (adjx < 0 || adjy < 0 || adjx >= N || adjy >= N) {
              continue;
            }
            if (visit.has(adj) || needToVisit.has(adj)) {
              continue;
            }

            let gap = Math.abs(input[x][y] - input[adjx][adjy]);
            if (gap < L || gap > R) {
              continue;
            }
            need_to_visit.push(adj);
            needToVisit.add(adj);
          }
        }
        if (visit.size > 1) {
          migrationCount++;
        }
        let population = Math.floor(sum / visit.size);
        for (let i of visit) {
          let x = Math.floor(i / N);
          let y = i % N;
          united[x][y] = true;
          newInput[x][y] = population;
        }
      }
    }
  }
  //인구이동이 끝났으면 newInput을 input에 반영하기
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      input[x][y] = newInput[x][y];
    }
  }
  if (migrationCount != 0) {
    return true;
  } else {
    return false;
  }
}
solution();
