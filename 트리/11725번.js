function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  let n = Number(input[0]);
  let vertices = {};
  for (let i = 1; i <= n; i++) {
    vertices[i] = { adj: [], parent: null };
  }
  vertices[1].parent = 0;
  for (let i = 1; i < n; i++) {
    let [a, b] = input[i].split(' ').map(Number);
    vertices[a].adj.push(b);
    vertices[b].adj.push(a);
  }
  let visit = new Set();

  let needtovisit = [];
  needtovisit.push(1);
  while (needtovisit.length > 0) {
    let num = needtovisit.pop();
    visit.add(num);
    vertices[num].adj.forEach(elm => {
      if (!visit.has(elm)) {
        needtovisit.push(elm);
      }
      if (vertices[elm].parent == null) {
        vertices[elm].parent = num;
      }
    });
  }
  let result = '';
  for (let i = 2; i <= n; i++) {
    if (i != n) {
      result += `${vertices[i].parent}\n`;
    } else {
      result += `${vertices[i].parent}`;
    }
  }
  console.log(result);
}
solution();
