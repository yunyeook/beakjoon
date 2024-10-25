
function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const [N, K] = input.shift().split(' ').map(Number)
  input = input[0].split(' ').map(Number)
  let arr = []
  for (let i = 0; i < N - 1; i++) {
    //오른쪽 원생과의 키차이를 저장함.
    arr[i] = input[i + 1] - input[i]
  }
  arr.sort((a, b) => { return a - b; }); //키차이를 정렬함.
  //arr.length = 전체 칸막이의 수
  //유지할 칸막이 수 = K-1
  //제거된 칸막이의 수 (= 전체칸막이의 수 - 유지할 칸막이의 수)만큼 더하면 됨.
  let remain = N - K; // =arr.lenght -(k-1) = N-1-K+1 = N-K
  let result = 0;
  for (let j = 0; j < remain; j++) {
    result+=arr[j]
  }
  console.log(result)
}
solution();
