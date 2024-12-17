function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  let n = Number(input[0]);
  let startx = Infinity;
  let endx = 0;
  let maxy = 0;
  for (let i = 1; i <= n; i++) {
    input[i] = input[i].split(' ').map(Number);
    if (input[i][0] < startx) {
      startx = input[i][0];
    }
    if (input[i][0] > endx) {
      endx = input[i][0];
    }
    if (input[i][1] > maxy) {
      maxy = input[i][1];
    }
  }
  let arr = Array.from(Array(endx + 1), () => {
    return Array(maxy).fill(0);
  });

  let count = 0;
  for (let i = 1; i <= n; i++) {
    let [x, y] = input[i];
    for (let j = 0; j < y; j++) {
      arr[x][j] = 1;
      count++;
    }
  }
  let sx;
  let ex;
  for (let i = 0; i < maxy; i++) {
    for (let j = 0; j <= endx; j++) {
      if (arr[j][i] == 1) {
        sx = j;
        break;
      }
    }
    for (let k = endx; k >= startx; k--) {
      if (arr[k][i] == 1) {
        ex = k;
        break;
      }
    }
    for (let l = sx; l <= ex; l++) {
      if (arr[l][i] == 0) {
        count++;
      }
    }
  }
  console.log(count);
}
solution();
