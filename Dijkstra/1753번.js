function Dijkstra(arr, Vertex_count, Edge_count, start_num) {
  //arr = 간선정보
  let vertices = {};
  let unvisit = new Set();
  let hash_table = {};

  for (let i = 1; i <= Vertex_count; i++) {
    if (i == start_num) {
      hash_table[i] = 0;
    } else {
      hash_table[i] = Infinity;
    }

    vertices[i] = {};
    unvisit.add(i);
  }

  //엣지연결
  for (let i = 0; i < Edge_count; i++) {
    let num = arr[i][0];
    let add = arr[i][1];
    let weight = arr[i][2];
    if (vertices[num][add] == null) {
      vertices[num][add] = weight;
    } else if (vertices[num][add] > weight) {
      vertices[num][add] = weight;
    }
  }
  console.log(vertices);

  while (unvisit.size !== 0) {
    let short = null; //1,2,3...

    for (let num of unvisit) {
      if (short == null || hash_table[short] > hash_table[num]) {
        short = num;
      }
    }

    unvisit.delete(short);

    for (let adjacent in vertices[short]) {
      if (hash_table[adjacent] > hash_table[short] + vertices[short][adjacent]) {
        hash_table[adjacent] = hash_table[short] + vertices[short][adjacent];
      }
    }
  }

  result(hash_table);
}
function result(obj) {
  let result = '';
  let legnth = Object.keys(obj).length;
  for (let i = 1; i <= legnth; i++)
    if (obj[i] == Infinity && i == legnth) {
      result += 'INF';
    } else if (obj[i] == Infinity) {
      result += `INF\n`;
    } else if (i == legnth) {
      result += `${obj[i]}`;
    } else {
      result += `${obj[i]}\n`;
    }

  console.log(result);
}

solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //  .readFileSync('/dev/stdin')
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');

  const [V, E] = input[0].toString().trim().split(' ').map(Number);
  const start_num = Number(input[1].trim());

  let newInput = [];
  for (let i = 2; i < input.length; i++) {
    newInput[i - 2] = input[i].trim().split(' ').map(Number);
  }

  // console.log(newInput);
  Dijkstra(newInput, V, E, start_num);
}
