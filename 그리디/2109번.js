function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const n = Number(input.shift());
  let maxDay = 1;
 
  for (let i = 0; i < n; i++) {
    input[i] = input[i].split(' ').map(Number);
    if (maxDay < input[i][1]) { maxDay = input[i][1]; }
  }
  input.sort((a, b) => { if (b[0] == a[0]) { return b[1] - a[1]} else { return b[0] - a[0] } })

  let days = Array(maxDay).fill(0);
  let result = 0;
 

  for (let i = 0; i < n; i++) {
    let deadline = input[i][1] - 1
    let fee = input[i][0]
    if (days[deadline] == 0) {
      days[deadline] = fee;
      result += fee;
    } else { 
      for (let j = deadline - 1; j >= 0; j--) {
        if (days[j] == 0) {
          days[j] = fee;
          result += fee;
          break;
         }
       }
    }
   }
console.log(result)
}
solution();
