function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const T = Number(input[0]);
  let answer = '';
  for (let i = 1; i <= T; i++) {
    let num = Number(input[i]);
    let result = Array(5).fill(0);
    if (num >= 60) {
      let addh = parseInt(num / 60);
      result[0] += addh;
      num = num % 60;
    }
    if (num > 35) {
      result[0]++;
      if (num < 60 && num >= 50) {
        num -= 50;
        result[2]++;
      } else if (num < 50 && num >= 40) {
        num -= 40;
        result[2] += 2;
      } else {
        num -= 30;
        result[2] += 3;
      }
    }

    if (num >= 10 && num <= 35) {
      if (num >= 30) {
        num -= 30;
        result[1] += 3;
      } else if (num < 30 && num >= 20) {
        num -= 20;
        result[1] += 2;
      } else {
        num -= 10;
        result[1] += 1;
      }
    }

    if (num > 0 && num < 10) {
      if (num < 5) {
        for (let i = num; i > 0; i--) {
          num--;
          result[3]++;
        }
      } else if (num == 5) {
        num = 0;
        if (result[2] > 0) {
          result[2]--;
          result[4] += 5;
        } else {
          result[3] += 5;
        }
      } else {
        result[1]++;
        let n = 10;
        while (n > num) {
          result[4]++;
          n--;
        }
        num = 0;
      }
    }

    if (num == 0) {
      if (result[1] > 0 && result[2] > 0) {
        if (result[1] >= result[2]) {
          result[1] -= result[2];
          result[2] = 0;
        } else {
          result[2] -= result[1];
          result[1] = 0;
        }
      }
      if (i == T) {
        answer += `${result.join(' ')}`;
      } else {
        answer += `${result.join(' ')}\n`;
      }
      continue;
    }
  }
  console.log(answer);
}
solution();
