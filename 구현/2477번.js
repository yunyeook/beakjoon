solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');
  const K = input.shift();
  for (let i in input) {
    input[i] = input[i].split(' ').map(Number);
  }

  const vertices = [];
  let maxX = 0;
  let maxY = 0;
  let minX = 0;
  let minY = 0;
  let currentX = 0;
  let currentY = 0;
  for (let i in input) {
    if (input[i][0] === 1) {
      currentX = currentX + input[i][1];
      if (maxX < currentX) {
        maxX = currentX;
      }
    } else if (input[i][0] === 2) {
      currentX = currentX - input[i][1];
      if (minX > currentX) {
        minX = currentX;
      }
    } else if (input[i][0] === 3) {
      currentY = currentY - input[i][1];
      if (minY > currentY) {
        minY = currentY;
      }
    } else if (input[i][0] === 4) {
      currentY = currentY + input[i][1];
      if (maxY < currentY) {
        maxY = currentY;
      }
    }

    vertices.push([currentX, currentY]);
  }

  let center = [];
  for (let i in vertices) {
    if (vertices[i][0] !== minX && vertices[i][0] !== maxX && vertices[i][1] !== minY && vertices[i][1] !== maxY) {
      center.push(vertices[i][0], vertices[i][1]);
    }
  }
  let area = 0;
  for (let i in vertices) {
    if (vertices[i][0] === minX || vertices[i][0] === maxX) {
      if (vertices[i][1] === minY || vertices[i][1] === maxY) {
        area += Math.floor(Math.abs(vertices[i][0] - center[0]) * Math.abs(vertices[i][1] - center[1]));
      }
    }
  }
  console.log(area * K);
}
