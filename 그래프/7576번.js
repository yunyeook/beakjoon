function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  let [m, n] = input.shift().split(' ').map(Number);
  let ripen = [];
  let set = new Set();
  let total = m * n;
  let count = 0;
  for (let i = 0; i < n; i++) {
    input[i] = input[i].split(' ').map(Number);
    for (let j = 0; j < m; j++) {
      if (input[i][j] == 1) {
        ripen.push([i, j]);
        set.add(i * m + j);
      } else if (input[i][j] == -1) {
        total--;
      }
    }
  }
  if (total == ripen.length) {
    return console.log(0);
  }
  let dx = [-1, +1, 0, 0];
  let dy = [0, 0, -1, +1];
  let ripencopy = [];
  while (ripen.length > 0) {
    let [x, y] = ripen.pop();

    for (let i = 0; i < 4; i++) {
      let adjx = x + dx[i];
      let adjy = y + dy[i];
      if (adjx < 0 || adjy < 0 || adjx >= n || adjy >= m) {
        continue;
      }
      if (input[adjx][adjy] == -1) {
        continue;
      }
      if (input[adjx][adjy] == 0 && !set.has(adjx * m + adjy)) {
        ripencopy.push([adjx, adjy]);
        set.add(adjx * m + adjy);
      }
    }
    if (ripen.length == 0) {
      if (ripencopy.length != 0) {
        count++;
      }
      ripen = ripencopy;
      ripencopy = [];
    }
  }
  if (set.size == total) {
    console.log(count);
  } else {
    console.log(-1);
  }
}
solution();
