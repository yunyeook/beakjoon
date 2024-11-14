function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const [h, w] = input[0].split(' ').map(Number);
  let arr = Array.from(Array(h), () => {
    return Array(w).fill(0);
  });
  input = input[1].split(' ').map(Number);
  for (let col = 0; col < w; col++) {
    let wall = input[col];
    for (let i = 0; i < wall; i++) {
      arr[i][col] = 1;
    }
  }
  let total = 0;
  for (let row = 0; row < h; row++) {
    let start = null;
    for (let i = 0; i < w; i++) {
      if (arr[row][i] == 1) {
        start = i;
        break;
      }
    }
    let end = null;
    for (let i = w - 1; i >= 0; i--) {
      if (arr[row][i] == 1) {
        end = i;
        break;
      }
    }
    if (start != end && start != null && end != null) {
      let count = 0;
      for (let i = start; i <= end - 1; i++) {
        if (arr[row][i] == 0) {
          count++;
        }
      }
      total += count;
    }
  }
  console.log(total);
}
solution();
