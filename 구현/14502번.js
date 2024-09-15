function laboratory(input, N, M) {
  // 0 좌표 (숫자)
  const set0 = new Set();
  // 바이러스 좌표 (숫자)
  const set2 = new Set();

  function zeros() {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (input[i][j] === 0) {
          set0.add(i * M + j);
        } else if (input[i][j] === 1) {
          continue;
        } else {
          set2.add(i * M + j);
        }
      }
    }
  }

  function makeone(num) {
    let x = Math.floor(num / M);
    let y = num % M;
    input[x][y] = 1;
  }
  function makezero(num) {
    let x = Math.floor(num / M);
    let y = num % M;
    input[x][y] = 0;
  }

  function copyInput(input) {
    const inputCopy = Array.from(Array(N), () => Array(M));
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        inputCopy[i][j] = input[i][j];
      }
    }

    return inputCopy;
  }

  function findZeros(inputCopy) {
    let count = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        if (inputCopy[i][j] == 0) {
          count++;
        }
      }
    }
    return count;
  }

  function bfs(inputCopy) {
    let d = [-M, +M, -1, +1]; //상하좌우

    let visit = new Array(N * M);
    visit.fill(false);

    for (let m of set2.keys()) {
      let need_visit = [];

      visit[m] = true;
      need_visit.push(m);
      while (need_visit.length != 0) {
        let dequeue = need_visit.shift();
        for (let l = 0; l < 4; l++) {
          let adjacent = dequeue + d[l];
          let adjacent_x = Math.floor(adjacent / M);
          let adjacent_y = adjacent % M;

          if (
            adjacent < 0 ||
            adjacent >= N * M ||
            (l === 2 && adjacent % M === M - 1) ||
            (l === 3 && adjacent % M === 0)
          ) {
            continue;
          }
          if (inputCopy[adjacent_x][adjacent_y] === 1 || inputCopy[adjacent_x][adjacent_y] === 2) {
            continue;
          }
          if (visit[adjacent]) {
            continue;
          }
          visit[adjacent] = true;
          need_visit.push(adjacent);
          inputCopy[adjacent_x][adjacent_y] = 2;
        }
      }
    }
  }

  zeros();
  let arr = [...set0];
  let maxcount = -1;
  for (let i = 0; i < arr.length - 2; i++) {
    makeone(arr[i]);
    set0.delete(arr[i]);

    for (let j = i + 1; j < arr.length - 1; j++) {
      makeone(arr[j]);
      set0.delete(arr[j]);

      for (let k = j + 1; k < arr.length; k++) {
        makeone(arr[k]);
        set0.delete(arr[k]);

        const inputCopy = copyInput(input);
        bfs(inputCopy);
        let zeroCount = findZeros(inputCopy);

        maxcount = Math.max(zeroCount, maxcount);
        // 0 숫자세기 -> bfs 탐색 끝나고 난뒤
        makezero(arr[k]);
        set0.add(arr[k]);
      }
      makezero(arr[j]);
      set0.add(arr[j]);
    }
    makezero(arr[i]);
    set0.add(arr[i]);
  }
  console.log(maxcount);
}

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');
  const [N, M] = input.shift().split(' ').map(Number);
  for (let i in input) {
    input[i] = input[i].split(' ').map(Number);
  }

  laboratory(input, N, M);
}

solution();
