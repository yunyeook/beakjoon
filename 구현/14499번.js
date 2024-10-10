let x;
let y;
let N;
let M;
let K;
let dice;
let diceL;
let diceR;

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');
  [N, M, x, y, K] = input.shift().split(' ').map(Number);
  K = input.pop().split(' ').map(Number);
  for (let i in input) {
    input[i] = input[i].split(' ').map(Number);
  }

  dice = [0, 0, 0, 0]; //뒤(북),위,앞(남),아래
  diceL = 0;
  diceR = 0;
  let print = '';

  for (let i in K) {
    let isrolled = rollDice(K[i]);
    if (isrolled) {
      changeNum(input);
      print += `${dice[1]}\n`;
    }
  }
  print = print.slice(0, -1);
  console.log(print);
}

function rollDice(move) {
  //move= 주사위 명령
  if (move == 4 && x + 1 < N) {
    dice.unshift(dice.pop());
    x = x + 1;
    return true;
  } else if (move == 3 && x - 1 >= 0) {
    dice.push(dice.shift());
    x = x - 1;
    return true;
  } else if (move == 1 && y + 1 < M) {
    let tmp = diceR;
    diceR = dice[1];
    dice[1] = diceL;
    diceL = dice.pop();
    dice.push(tmp);
    y = y + 1;
    return true;
  } else if (move == 2 && y - 1 >= 0) {
    let tmp = diceL;
    diceL = dice[1];
    dice[1] = diceR;
    diceR = dice.pop();
    dice.push(tmp);
    y = y - 1;
    return true;
  } else {
    return false;
  }
}
function changeNum(input) {
  if (input[x][y] == 0) {
    input[x][y] = dice[3];
  } else {
    dice.pop();
    dice.push(input[x][y]);
    input[x][y] = 0;
  }
}
solution();
