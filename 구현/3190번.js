function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');
  let N = Number(input.shift());
  let appleCount = Number(input.shift());
  let applesCoordinate = new Set();
  for (let i = 0; i < appleCount; i++) {
    let [x, y] = input.shift().trim().split(' ').map(Number);
    x = x - 1;
    y = y - 1;
    applesCoordinate.add(x * N + y);
  }

  let directionCount = Number(input.shift());
  let turnLeft = [];
  let turnRight = [];
  for (let i = 0; i < directionCount; i++) {
    let [s, d] = input[i].trim().split(' ');
    if (d == 'D') {
      turnRight.push(Number(s));
    } else if (d == 'L') {
      turnLeft.push(Number(s));
    }
  }
  snake(N, applesCoordinate, turnLeft, turnRight);
}

function snake(N, applesCoordinate, turnLeft, turnRight) {
  let seconds = 0;
  let left;
  let right;
  if (turnLeft.length > 0) {
    left = turnLeft.shift();
  } else {
    left = -1;
  }
  if (turnRight.length > 0) {
    right = turnRight.shift();
  } else {
    right = -1;
  }
  let currentDirection = 1; //0북,1동,2남,3서
  let snake = new Set();
  let snakeArr = [];
  let currentx = 0;
  let currenty = 0;
  snake.add(0);
  snakeArr.push(0);

  while (true) {
    [currentx, currenty] = moveForward(currentDirection, currentx, currenty); //직진하기
    seconds++; //+1초
    let current = currentx * N + currenty;

    if (currentx < 0 || currenty < 0 || currentx >= N || currenty >= N) {
      //벽에 부딪히면 break
      break;
    }
    if (snake.has(current)) {
      //내 몸에 부딪히면 break
      break;
    }
    if (!applesCoordinate.has(current)) {
      //직진했는데 사과 없으면 뱀꼬리 줄이기
      snake.delete(snakeArr.shift());
    } else {
      applesCoordinate.delete(current);
    }

    snake.add(current);
    snakeArr.push(current);
    if (seconds == left) {
      currentDirection = ChangeDirection(currentDirection, -1);
      if (turnLeft.length > 0) {
        left = turnLeft.shift();
      } else {
        left = -1;
      }
    } else if (seconds == right) {
      currentDirection = ChangeDirection(currentDirection, 1);
      if (turnRight.length > 0) {
        right = turnRight.shift();
      } else {
        right = -1;
      }
    }
  }
  console.log(seconds);
}

function ChangeDirection(currentDirection, turn) {
  if (turn == -1) {
    if (currentDirection == 0) {
      currentDirection = 3;
    } else {
      currentDirection = currentDirection - 1;
    }
  } else if (turn == 1) {
    if (currentDirection == 3) {
      currentDirection = 0;
    } else {
      currentDirection = currentDirection + 1;
    }
  }
  return currentDirection;
}
function moveForward(currentDirection, x, y) {
  if (currentDirection == 0) {
    x = x - 1;
  } else if (currentDirection == 1) {
    y = y + 1;
  } else if (currentDirection == 2) {
    x = x + 1;
  } else if (currentDirection == 3) {
    y = y - 1;
  }
  return [x, y];
}

solution();
