function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  let [n, m] = input[0].split(' ').map(Number);
  let vertices = {};
  let needtovisit = [];
  for (let i = 1; i <= n; i++) {
    vertices[i] = [];
  }
  for (let i = 1; i <= m; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    vertices[a].push(b);
    vertices[b].push(a);
  }
  let visit = new Set();
  let count = 0;
  let set = new Set();
  for (let i = 1; i <= n; i++) {
    if (!set.has(i)) {
      needtovisit.push(i);
      visit.add(i);
      while (needtovisit.length > 0) {
        let deque = needtovisit.pop();
        set.add(deque);
        vertices[deque].forEach(element => {
          if (!set.has(element) && !visit.has(element)) {
            needtovisit.push(element);
            visit.add(element);
          }
        });
      }
      count++;
    }
  }
  console.log(count);
}
solution();
