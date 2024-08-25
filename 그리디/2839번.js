//2839번 설탕배달
solution();

function solution() {
  let input = require('fs')
    // .readFileSync("/dev/stdin")
    .readFileSync(__dirname + '/input.txt')
    .toString()
    .trim();

  const kg = Number(input);
  // const result = sugar(kg);
  // const result = aa(kg);
  for (let i = 3; i <= 5000; i++) {
    const a = sugar(i);
    const b = aa(i);
    // console.log(a, b);
    if (a !== b) {
      console.log(i);
    }
  }
  // console.log(result);
}

function sugar(kg) {
  // 17
  // share5 -> 3, 4
  // share 3 -> 5, 6
  let share5 = Math.floor(kg / 5); //3
  let share3 = Math.floor(kg / 3); //6
  // console.log(share5, share3);
  if (kg % 5 == 0) {
    return share5;
  } else {
    for (let i = share5; i >= 0; i--) {
      for (let j = 0; j <= share3; j++) {
        if (5 * i + 3 * j == kg) {
          return i + j;
        } else if (5 * i + 3 * j < kg) {
          continue;
        } else if (5 * i + 3 * j > kg) {
          // console.log(kg);
          break;
        }
      }
    }
    return -1;
  }
}
