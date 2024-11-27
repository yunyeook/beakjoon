function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  let [num1, num2, num3, num4] = input[0].split(' ').map(Number);
  let num = Math.min(
    num1 * 1000 + num2 * 100 + num3 * 10 + num4,
    num2 * 1000 + num3 * 100 + num4 * 10 + num1,
    num3 * 1000 + num4 * 100 + num1 * 10 + num2,
    num4 * 1000 + num1 * 100 + num2 * 10 + num3
  );
  let set = new Set();
  for (let i = 1111; i < num; i++) {
    let s = String(i);
    let n1 = Number(s.charAt(0));
    let n2 = Number(s.charAt(1));
    let n3 = Number(s.charAt(2));
    let n4 = Number(s.charAt(3));
    if (n1 == 0 || n2 == 0 || n3 == 0 || n4 == 0) {
      continue;
    }
    let n = Math.min(
      n1 * 1000 + n2 * 100 + n3 * 10 + n4,
      n2 * 1000 + n3 * 100 + n4 * 10 + n1,
      n3 * 1000 + n4 * 100 + n1 * 10 + n2,
      n4 * 1000 + n1 * 100 + n2 * 10 + n3
    );
    set.add(n);
  }
  console.log(set.size + 1);
}
solution();
