solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');

  const [x, y] = input.shift().split(' ').map(Number); //10=x, y=5
  const storesCount = Number(input.shift());
  for (let i in input) {
    input[i] = input[i].split(' ').map(Number);
  }

  const myDirection = input[input.length - 1][0];
  const myDistance = input[input.length - 1][1];
  let distance = 0;
  for (let i = 0; i < storesCount; i++) {
    let storeDirection = input[i][0];
    let storeDistance = input[i][1];

    if (input[i][0] === myDirection) {
      distance += Math.abs(input[i][1] - input[input.length - 1][1]);
    } else {
      //내가 북 또는 남일때
      if (myDirection === 1 || myDirection === 2) {
        if (storeDirection === 1 || storeDirection === 2) {
          distance += Math.min(storeDistance + myDistance, 2 * x - (storeDistance + myDistance)) + y;
        } else {
          if (myDirection === 1) {
            if (storeDirection === 3) {
              distance += storeDistance + myDistance;
            } else {
              distance += storeDistance + x - myDistance;
            }
          } else {
            if (storeDirection === 3) {
              distance += y - storeDistance + myDistance;
            } else {
              distance += x + y - (storeDistance + myDistance);
            }
          }
        }

        //내가 서 또는 동일때
      } else {
        if (storeDirection === 3 || storeDirection === 4) {
          distance += Math.min(storeDistance + myDistance, 2 * y - (storeDistance + myDistance)) + x;
        } else {
          if (myDirection === 3) {
            if (storeDirection === 1) {
              distance += storeDistance + myDistance;
            } else {
              distance += storeDistance + y - myDistance;
            }
          } else {
            if (storeDirection === 1) {
              distance += x - storeDistance + myDistance;
            } else {
              distance += x + y - (storeDistance + myDistance);
            }
          }
        }
      }
    }
  }
  console.log(distance);
}
