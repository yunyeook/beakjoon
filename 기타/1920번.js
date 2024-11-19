function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  let an = input[1].split(' ').map(Number);
  let am = input[3].split(' ').map(Number);
  let set = new Set();
  for (let i in an) {
    set.add(an[i]);
  }
  let result = [];
  for (let i in am) {
    if (set.has(am[i])) {
      result.push(1);
    } else {
      result.push(0);
    }
  }
  console.log(result.join(`\n`));
}
solution();
