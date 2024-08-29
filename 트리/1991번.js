class Node {
  constructor(num) {
    this.num = num;
    this.left_child = undefined;
    this.rigth_child = undefined;
  }
}

function maketree(N, arr, tree) {
  //Node만들기
  for (let i = 0; i < N; i++) {
    tree[65 + i] = new Node(65 + i);
  }

  //Node연겷하기
  for (let i in arr) {
    tree[arr[i][0]].left_child = tree[arr[i][1]];
    tree[arr[i][0]].rigth_child = tree[arr[i][2]];
    // console.log(tree[arr[i][0]]);
  }
}
function print(arr) {
  let result = '';
  for (let element of arr) {
    result += String.fromCharCode(element);
  }
  console.log(result);
}

function preorder_result(node) {
  let result = [];
  function preorder(node) {
    if (node == undefined) return;

    result.push(node.num);
    preorder(node.left_child);
    preorder(node.rigth_child);
  }
  preorder(node);
  print(result);
}

function inorder_result(node) {
  let result = [];

  function inorder(node) {
    if (node == undefined) return;

    inorder(node.left_child);
    result.push(node.num);
    inorder(node.rigth_child);
  }
  inorder(node);
  print(result);
}

function postorder_result(node) {
  let result = [];
  function postorder(node) {
    if (node == undefined) return;
    postorder(node.left_child);
    postorder(node.rigth_child);
    result.push(node.num);
  }
  postorder(node);
  print(result);
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

  const N = Number(input.shift());

  for (let i in input) {
    input[i] = input[i].toString().trim().split(' ');
    input[i][0] = input[i][0].toString().charCodeAt();
    input[i][1] = input[i][1].toString().charCodeAt();
    input[i][2] = input[i][2].toString().charCodeAt();
  }
  let tree = {};
  maketree(N, input, tree);
  // console.log(input);
  // console.log(tree);
  preorder_result(tree[65]);
  inorder_result(tree[65]);
  postorder_result(tree[65]);
}
