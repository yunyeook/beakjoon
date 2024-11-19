function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const n = Number(input[0]);
  let [a, b] = input[1].split(' ').map(Number);
  const m = Number(input[2]);
  let nodes = {};
  let roots = new Set();
  for (let i = 1; i <= n; i++) {
    nodes[i] = { parent: null, children: null, depth: null };
    roots.add(i);
  }
  for (let i = 3; i <= m + 2; i++) {
    let [num1, num2] = input[i].split(' ').map(Number);
    if (!nodes[num1].children) {
      nodes[num1].children = [num2];
    } else {
      nodes[num1].children.push(num2);
    }
    nodes[num2].parent = num1;
    roots.delete(num2);
  }
  function dfs(num, Depth) {
    if (!nodes[num].children) {
      return;
    }
    nodes[num].children.forEach(elm => {
      nodes[elm].depth = Depth + 1;
      dfs(elm, Depth + 1);
    });
  }
  roots.forEach(elem => {
    nodes[elem].depth = 0;
    dfs(elem, 0);
  });

  let up;
  let down;
  let isSame = false;
  if (nodes[a].depth > nodes[b].depth) {
    up = b;
    down = a;
  } else if (nodes[a].depth < nodes[b].depth) {
    up = a;
    down = b;
  } else {
    isSame = true;
    up = a;
    down = b;
  }
  let plusCount = 0;
  if (!isSame) {
    while (nodes[up].depth != nodes[down].depth) {
      plusCount++;
      down = nodes[down].parent;
    }
  }

  let total = 0;
  while (up != down) {
    up = nodes[up].parent;
    down = nodes[down].parent;
    total += 2;
    if (up == null && down == null) {
      break;
    }
  }
  if (up == null && down == null) {
    console.log(-1);
  } else if (up == down) {
    console.log(total + plusCount);
  }
}
solution();
