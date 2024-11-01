function solution() {
  const fs = require('fs');
  let input = fs
    // .readFileSync('/dev/stdin')
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const [N, K] = input[0].split(' ').map(Number);
  input = input[1].split(' ').map(Number);
  let head = 0;
  let last = N - 1;
  let inputLast = 2 * N - 1;
  let loads = Array(N).fill(false);

  let phase = 0;
  do {
    phase++;
    //회전하기
    input.unshift(input[inputLast]);
    input.pop();
    loads.unshift(false);
    loads.pop();
    if (loads[last]) {
      loads[last] = false;
    }

    //내구도1이상일때,짐없을때 짐옮기기
    for (let i = last; i >= 0; i--) {
      if (loads[i]) {
        if (!loads[i + 1] && input[i + 1] > 0) {
          loads[i] = false;
          loads[i + 1] = true;
          input[i + 1]--;
          if (i + 1 == last && loads[i + 1]) {
            loads[i + 1] = false;
          }
        } else {
          continue;
        }
      } else {
        continue;
      }
    }

    if (input[0] > 0) {
      loads[0] = true;
      input[0]--;
    }
    let zero = 0;
    for (let i = 0; i <= inputLast; i++) {
      if (input[i] == 0) {
        zero++;
      }
      if (zero >= K) {
        break;
      }
    }
    if (zero >= K) {
      break;
    }
  } while (true);
  console.log(phase);
}
solution();
