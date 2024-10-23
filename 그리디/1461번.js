solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const [N, M] = input.shift().split(' ').map(Number)
  input = input[0].split(' ').map(Number)
  let left = []
  let right = []
  for (let i in input) {
    if (input[i] < 0) {
      left.push(input[i])
    } else {
      right.push(input[i])
    }
  }
  left.sort((a, b) => {
    return b - a
  })
  right.sort((a, b) => {
    return a - b
  })
  let leftMax = (left.length != 0 ? Math.abs(left[left.length - 1]) : 0)
  let rightMax = (right.length != 0 ? right[right.length - 1] : 0)
  let leftDistance = 0;
  let rightDistance = 0;

  while (left.length > 0) {
    leftDistance += (Math.abs(left[left.length - 1])) * 2
    for (let i = 1; i <= M; i++) {
      if (left.length == 0) {
        break
      }
      left.pop()
    }
  }
  while (right.length > 0) {
    rightDistance += (right[right.length - 1]) * 2
    for (let i = 1; i <= M; i++) {
      if (right.length == 0) {
        break
      }
      right.pop()
    }
  }

  let result = leftDistance + rightDistance - Math.max(leftMax, rightMax)
  console.log(result)
}