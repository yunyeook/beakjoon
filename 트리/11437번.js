function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');

  let N = Number(input[0]);
  let M = Number(input[N]);

  let nodes = { 1: { adj: [], depth: 0 } };
  for (let i = 2; i <= N; i++) {
    nodes[i] = {
      adj: [],
      depth: null,
      parent: null,
    };
  }
  for (let i = 1; i < N; i++) {
    input[i] = input[i].split(' ').map(Number);
    let num1 = input[i][0];
    let num2 = input[i][1];
    nodes[num1].adj.push(num2);
    nodes[num2].adj.push(num1);
  }
  let needToVisit = [];
  needToVisit.push(1);
  for (let n = 0; n < N; n++) {
    let dequeue = needToVisit[n];
    let currentDepth = nodes[dequeue].depth;
    for (let i in nodes[dequeue].adj) {
      let adjNum = nodes[dequeue].adj[i];
      if (nodes[adjNum].depth == null) {
        nodes[adjNum].depth = currentDepth + 1;
        nodes[adjNum].parent = dequeue;
        needToVisit.push(adjNum);
      }
    }
  }
  let last = N + M;
  let result = '';
  for (let i = N + 1; i <= last; i++) {
    input[i] = input[i].split(' ').map(Number);
    let num1 = input[i][0];
    let num2 = input[i][1];
    let small;
    let large;
    if (nodes[num1].depth > nodes[num2].depth) {
      small = num2;
      large = num1;
    } else {
      small = num1;
      large = num2;
    }
    while (nodes[small].depth != nodes[large].depth) {
      large = nodes[large].parent;
    }
    while (large != small) {
      large = nodes[large].parent;
      small = nodes[small].parent;
    }
    if (i == last) {
      result += `${large}`;
    } else {
      result += `${large}\n`;
    }
  }
  console.log(result);
}
solution();
