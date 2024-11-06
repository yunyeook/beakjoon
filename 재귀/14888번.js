function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const A = Number(input[0]) - 1; //연산자갯수
  const numbers = input[1].split(' ').map(Number);
  input[2] = input[2].split(' ').map(Number);
  let oper = [];
  for (let i in input[2]) {
    let add;
    if (i == 0) {
      add = 'p';
    } else if (i == 1) {
      add = 'm';
    } else if (i == 2) {
      add = 'x';
    } else if (i == 3) {
      add = 'd';
    }
    let count = input[2][i];
    while (count > 0) {
      oper.push(add);
      count--;
    }
  }
  // console.log(oper);x
  let minSum = null;
  let maxSum = null;
  const dfs = (selected, rests) => {
    if (rests.length === 0) {
      // console.log(selected);
      let num = numbers[0];
      for (let i = 0; i < A; i++) {
        //인덱스 저장함.
        let operator = selected[i]; // p,m,x,d
        if (operator == 'p') {
          num = num + numbers[i + 1];
        } else if (operator == 'm') {
          num = num - numbers[i + 1];
        } else if (operator == 'x') {
          num = num * numbers[i + 1];
        } else if (operator == 'd') {
          num = parseInt(num / numbers[i + 1]);
        }
      }
      if (minSum == null) {
        maxSum = num;
        minSum = num;
      } else {
        minSum = Math.min(minSum, num);
      }
      maxSum = Math.max(maxSum, num);
      return;
    }
    rests.forEach((elm, index) => {
      const rest = [...rests.slice(0, index), ...rests.slice(index + 1)];
      dfs([...selected, elm], rest);
    });
  };
  dfs([], oper);
  console.log(`${maxSum}\n${minSum}`);
}
solution();
