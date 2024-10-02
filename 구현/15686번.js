//치킨배달
//두 좌표의 최소 거리  = |x1- x2| + |y1-y2|
solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');
  const [N, M] = input.shift().split(' ').map(Number);
  let chickenPlace = []; //숫자좌표로 저장
  let houses = []; //숫자좌표로 저장
  for (let i in input) {
    input[i] = input[i].split(' ').map(Number);
    for (let j = 0; j < N; j++) {
      if (input[i][j] === 1) {
        houses.push(Number(i) * N + Number(j));
      } else if (input[i][j] === 2) {
        chickenPlace.push(Number(i) * N + Number(j));
      }
    }
  }
  let result = Infinity; // solution{}블록내에서 result가 선언되고 dfs함수도 선언되어있으므로 dfs가 result값을 읽을 수 있다.
  if (chickenPlace.length === M) {
    console.log(a(houses, chickenPlace, N));
  } else {
    // let result = Infinity; -> result가 else블록에서만 유효하므로 dfs함수를 js엔진이 읽을때 다른 블록이라 result의 선언 조차 찾지못함.
    dfs(-1, [], chickenPlace, N);
    console.log(result);
  }

  function dfs(i, arr, chickenPlace, N) {
    if (i >= chickenPlace.length) {
      return;
    }
    if (arr.length === M) {
      result = Math.min(result, a(houses, arr, N));

      return;
    }
    dfs(i + 1, [...arr, chickenPlace[i + 1]], chickenPlace, N);
    dfs(i + 1, [...arr], chickenPlace, N);
  }
}

function a(houses, chickenPlace, N) {
  let total = 0;
  for (let i in houses) {
    let min = Infinity;
    for (let j in chickenPlace) {
      let distance =
        Math.abs(Math.floor(houses[i] / N) - Math.floor(chickenPlace[j] / N)) +
        Math.abs(Math.floor(houses[i] % N) - Math.floor(chickenPlace[j] % N));
      min = Math.min(min, distance);
    }
    total += min;
  }
  return total;
}
