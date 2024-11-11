function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const T = Number(input.shift());
  let currentT = 1;
  let index = 0;
  let result = [];
  while (currentT <= T) {
    let [m, n, k] = input[index].split(' ').map(Number);
    let newInput = Array.from(Array(n), () => {
      return Array(m).fill(0);
    });
    let visit = Array.from(Array(n), () => {
      return Array(m).fill(false);
    });
    let worms = [];
    for (let i = index + 1; i <= index + k; i++) {
      let [y, x] = input[i].split(' ').map(Number);
      newInput[x][y] = 1;
      worms.push([x, y]);
    }

    let count = 0;
    const dx = [-1, +1, 0, 0];
    const dy = [0, 0, -1, +1];
    let needtovisit = [];
    let needtovisitSet = new Set();
    while (worms.length > 0) {
      let [x, y] = worms.shift();
      if (visit[x][y]) {
        continue;
      }
      needtovisit.push([x, y]);
      needtovisitSet.add(x * n + y);
      while (needtovisit.length > 0) {
        let [curx, cury] = needtovisit.shift();
        visit[curx][cury] = true;
        for (let j = 0; j < 4; j++) {
          let adjx = curx + dx[j];
          let adjy = cury + dy[j];
          if (adjx < 0 || adjy < 0 || adjx >= n || adjy >= m) {
            continue;
          }
          if (visit[adjx][adjy]) {
            continue;
          }
          if (!needtovisitSet.has(adjx * m + adjy) && newInput[adjx][adjy] == 1) {
            needtovisit.push([adjx, adjy]);
            needtovisitSet.add(adjx * m + adjy);
          }
        }
      }
      count++;
    }
    result.push(count);
    currentT++;
    index += k + 1;
  }
  console.log(result.join(`\n`));
}
solution();
