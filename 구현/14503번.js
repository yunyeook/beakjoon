let input;
let N;
let M;
let north;
let west;
let south;
let east;
let currentX;
let currentY;
let currentDirection;
solution();
function solution() {
  const fs = require('fs');
  input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');

  const NM = input.shift().split(' ').map(Number);
  N = NM[0];
  M = NM[1];
  const firstSpot = input.shift().split(' ').map(Number);
  currentX = firstSpot[0];
  currentY = firstSpot[1];
  currentDirection = firstSpot[2];

  for (let i = 0; i < N; i++) {
    input[i] = input[i].split(' ').map(Number);
  }

  directions();
  robotVacuumCleaner();
}

function robotVacuumCleaner() {
  let count = 0;
  let result = true;
  while (result) {
    if (input[currentX][currentY] === 0) {
      input[currentX][currentY] = 2;
      count++;
    }

    //사방중 0이 있는경우
    while (!isAllOneOrCleaned()) {
      // 1.반시계방향으로 바꾸기
      let CCW = (currentDirection + 3) % 4;
      currentDirection = CCW;

      //2.현재방향으로 앞으로 한칸 가기
      if (currentDirection === 0 && north === 0) {
        currentX = currentX - 1;
      } else if (currentDirection === 3 && west === 0) {
        currentY = currentY - 1;
      } else if (currentDirection === 2 && south === 0) {
        currentX = currentX + 1;
      } else if (currentDirection === 1 && east === 0) {
        currentY = currentY + 1;
      }

      //3.현재위치 청소하기
      //0을 1로 바꾸면 벽이 된다.... -> 청소한 의미가 아니야..
      if (input[currentX][currentY] === 0) {
        input[currentX][currentY] = 2;
        count++;
      }
      directions();
    }

    // 사방중 0이 없다면?
    if (isAllOneOrCleaned()) {
      result = isPossibleback(); //뒤로 갓음.
      directions();
    }
  }

  console.log(count);
}
function directions() {
  if (currentX - 1 >= 0) {
    north = input[currentX - 1][currentY];
  } else {
    north = 1;
  }

  if (currentY - 1 >= 0) {
    west = input[currentX][currentY - 1];
  } else {
    west = 1;
  }

  if (currentX + 1 < N) {
    south = input[currentX + 1][currentY];
  } else {
    south = 1;
  }

  if (currentY + 1 < M) {
    east = input[currentX][currentY + 1];
  } else {
    east = 1;
  }
}
function isPossibleback() {
  if (currentDirection === 0 && currentX + 1 < N && input[currentX + 1][currentY] !== 1) {
    currentX = currentX + 1;
  } else if (currentDirection === 3 && currentY + 1 < M && input[currentX][currentY + 1] !== 1) {
    currentY = currentY + 1;
  } else if (currentDirection === 2 && currentX - 1 >= 0 && input[currentX - 1][currentY] !== 1) {
    currentX = currentX - 1;
  } else if (currentDirection === 1 && currentY - 1 >= 0 && input[currentX][currentY - 1] !== 1) {
    currentY = currentY - 1;
  } else {
    return false;
  }
  return true;
}

function isAllOneOrCleaned() {
  //벽 또는 청소된곳
  let N = false;
  let E = false;
  let W = false;
  let S = false;

  if (north === 1 || north === 2) {
    N = true;
  }
  if (east === 1 || east === 2) {
    E = true;
  }
  if (west === 1 || west === 2) {
    W = true;
  }
  if (south === 1 || south === 2) {
    S = true;
  }

  if (N === true && E === true && W === true && S === true) {
    return true;
  } else {
    return false;
  }
}
