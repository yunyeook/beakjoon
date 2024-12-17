function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  let n = Number(input.shift());
  let input2 = [];
  for (let i = 0; i < n; i++) {
    input[i] = input[i].trim().split('');
    input2.push([...input[i]]);
    for (let j = 0; j < n; j++) {
      if (input2[i][j] == 'G') {
        input2[i][j] = 'R';
      }
    }
  }
  let dx = [-1, +1, 0, 0];
  let dy = [0, 0, -1, +1];
  let visit = new Set();
  let needtovisit = [];
  let needVisit = new Set();
  let num = n * n;
  let count = 0;
  for (let i = 0; i < num; i++) {
    if (!visit.has(i)) {
      let a = Math.floor(i / n);
      let b = i % n;
      needtovisit.push([a, b]);
      while (needtovisit.length > 0) {
        let [x, y] = needtovisit.pop();
        visit.add(x * n + y);
        let alphabet = input[x][y];
        for (let j = 0; j < 4; j++) {
          let adjx = x + dx[j];
          let adjy = y + dy[j];
          let adj = adjx * n + adjy;
          if (adjx < 0 || adjy < 0 || adjx >= n || adjy >= n) {
            continue;
          }
          if (visit.has(adj)) {
            continue;
          }
          if (!visit.has(adj) && !needVisit.has(adj) && input[adjx][adjy] == alphabet) {
            needVisit.add(adj);
            needtovisit.push([adjx, adjy]);
          }
        }
      }
      count++;
    }
  }

  visit = new Set();
  needtovisit = [];
  needVisit = new Set();
  let count2 = 0;

  for (let i = 0; i < num; i++) {
    if (!visit.has(i)) {
      let a = Math.floor(i / n);
      let b = i % n;
      needtovisit.push([a, b]);
      while (needtovisit.length > 0) {
        let [x, y] = needtovisit.pop();
        visit.add(x * n + y);
        let alphabet = input2[x][y];
        for (let j = 0; j < 4; j++) {
          let adjx = x + dx[j];
          let adjy = y + dy[j];
          let adj = adjx * n + adjy;
          if (adjx < 0 || adjy < 0 || adjx >= n || adjy >= n) {
            continue;
          }
          if (visit.has(adj)) {
            continue;
          }
          if (!visit.has(adj) && !needVisit.has(adj) && input2[adjx][adjy] == alphabet) {
            needVisit.add(adj);
            needtovisit.push([adjx, adjy]);
          }
        }
      }
      count2++;
    }
  }

  console.log(`${count} ${count2}`);
}
solution();
