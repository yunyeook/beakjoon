function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/beakjoon/구현/input.txt')
    .toString()
    .trim()
    .split('\n');
  const [R, C, T] = input.shift().split(' ').map(Number);
  let upper = null;
  let lower = null;
  let dust = new Set();
  for (let i = 0; i < R; i++) {
    input[i] = input[i].split(' ').map(Number);
    for (let j = 0; j < C; j++) {
      if (input[i][j] == -1) {
        if (upper == null) {
          upper = [i, j];
        } else {
          lower = [i, j];
        }
      } else if (input[i][j] != 0 && input[i][j] != -1) {
        dust.add(i * C + j);
      }
    }
  }
  const dx = [-1, +1, 0, 0];
  const dy = [0, 0, -1, +1];
  let newInput;

  function SpreadDust() {
    newInput = Array.from(Array(R), () => {
      return Array(C).fill(0);
    });
    newInput[upper[0]][upper[1]] = -1;
    newInput[lower[0]][lower[1]] = -1;
    for (let x = 0; x < R; x++) {
      for (let y = 0; y < C; y++) {
        let xy = x * C + y;
        if (dust.has(xy)) {
          let s = Math.floor(input[x][y] / 5);
          let count = 0;
          for (let d = 0; d < 4; d++) {
            let adjx = x + dx[d];
            let adjy = y + dy[d];
            if (adjx < 0 || adjy < 0 || adjx >= R || adjy >= C) {
              continue;
            }
            if (input[adjx][adjy] == -1) {
              continue;
            }
            newInput[adjx][adjy] += s;
            count++;
          }
          newInput[x][y] += input[x][y] - s * count;
        }
      }
    }
  }

  function upperCirculation() {
    let tmp = newInput[upper[0]].pop();
    newInput[upper[0]].splice(1, 0, 0);
    for (let e = upper[0] - 1; e > 0; e--) {
      let tmp2 = newInput[e][C - 1];
      newInput[e][C - 1] = tmp;
      tmp = tmp2;
    }
    newInput[0].push(tmp);
    tmp = newInput[0].shift();
    for (let f = 1; f < upper[0]; f++) {
      let tmp2 = newInput[f][0];
      newInput[f][0] = tmp;
      tmp = tmp2;
    }
  }

  function lowerCirculatioin() {
    let tmp = newInput[lower[0]].pop();
    newInput[lower[0]].splice(1, 0, 0);
    for (let e = lower[0] + 1; e < R - 1; e++) {
      let tmp2 = newInput[e][C - 1];
      newInput[e][C - 1] = tmp;
      tmp = tmp2;
    }
    newInput[R - 1].push(tmp);
    tmp = newInput[R - 1].shift();
    for (let f = R - 2; f > lower[0]; f--) {
      let tmp2 = newInput[f][0];
      newInput[f][0] = tmp;
      tmp = tmp2;
    }
  }
  for (let t = 1; t <= T; t++) {
    SpreadDust();
    upperCirculation();
    lowerCirculatioin();
    input = newInput;
    dust.clear()
    for (let a = 0; a < R; a++) {
      for (let b = 0; b < C; b++) {
        if (input[a][b] !== -1) {
          dust.add(a * C + b)
        }
      }
    }
  }

  let result = 0;
  for (let a = 0; a < R; a++) {
    for (let b = 0; b < C; b++) {
      if (input[a][b] !== -1) {
        result += input[a][b];
      }
    }
  }
  console.log(result);
}
solution();