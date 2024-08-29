function graph(arr) {
  let N = arr[0][0];
  let M = arr[0][1];
  let V = arr[0][2];
  let vertices = {};
  let visitDFS = {};
  let resultDFS = '';

  register(N);
  for (let i = 1; i <= M; i++) {
    add(arr[i][0], arr[i][1]);
  }
  sort(vertices);
  DFS(V);
  console.log(resultDFS.trim());
  BFS(V);

  function register(N) {
    for (let i = 1; i <= N; i++) {
      vertices[i] = [];
    }
  }

  function add(num1, num2) {
    vertices[num1].push(num2);
    vertices[num2].push(num1);
  }
  function sort(vertices) {
    for (let key in vertices) {
      vertices[key].sort((a, b) => {
        return a - b;
      });
    }
  }

  function DFS(num) {
    if (visitDFS[num] == true) {
      return;
    }
    visitDFS[num] = true;
    resultDFS += ` ${num}`;
    for (let value of vertices[num]) {
      DFS(value);
    }
  }

  function BFS(num) {
    let visit = [];
    let need_to_visit = [];
    let resultBFS = '';

    need_to_visit.push(num);

    while (need_to_visit.length != 0) {
      let dequeNum = need_to_visit.shift();
      visit.push(dequeNum);
      resultBFS += ` ${dequeNum}`;

      for (let value of vertices[dequeNum]) {
        if (need_to_visit.includes(value) == false && visit.includes(value) == false) {
          need_to_visit.push(value);
        }
      }
    }
    console.log(resultBFS.trim());
  }
}

solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync('/dev/stdin')
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');
  // console.log(input);

  let reInput = [];
  for (let i = 0; i < input.length; i++) {
    reInput[i] = input[i].split(' ').map(Number);
  }
  // console.log(reInput);
  graph(reInput);
}
