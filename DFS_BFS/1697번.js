/*
숨바꼭질
이동가능한 위치 : -1, +1, *2
bfs로 큐를 사용함.
이동가능한 위치를 방문표시하고 큐에 넣는다. 
숫자가 겹치는 경우엔 이미 방문했고 현재보다 깊이가 적으므로 더 해봤자 필요없음.

*/

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');

  const [n, k] = input[0].split(' ').map(Number);
  let visit = Array(100001).fill(false);
  let start = [n, 0];
  let queue = [];
  queue.push(start);
  visit[n] = true;
  let result = 0;
  while (queue.length > 0) {
    let [num, depth] = queue.shift(); //[num, depth]
    if (num === k) {
      result = depth;
      break;
    }
    for (let nextNum of [num - 1, num + 1, num * 2]) {
      console.log(nextNum);
      if (nextNum >= 0 && nextNum <= 100000 && !visit[nextNum]) {
        queue.push([nextNum, depth + 1]);
        visit[nextNum] = true;
      }
    }
  }
  console.log(result);
}
solution();
