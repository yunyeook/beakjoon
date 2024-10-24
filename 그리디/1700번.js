function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');

  const [N, K] = input.shift().split(' ').map(Number);
  input = input[0].split(' ').map(Number);
  let offCount = 0;
  let plug = new Set();
  for (let i = 0; i < K; i++) {
    if (plug.has(input[i])) { continue; }//꽂혀있는거 쓰면 continue
    else { //새거 꽂아야한다면?
      if (plug.size < N) {// plug꽂을자리 있으면 꽂기
      plug.add(input[i])
    } else if (plug.size == N) {//꽂을자리 없으면 뺄거 찾아 꽂기
        let offPlugs = new Set();
        for (let p of plug) {
         offPlugs.add(p)
         }
        for (let j = i; j < K; j++) {
          if  (offPlugs.size == 1) {
            break;
          } else {
            if (offPlugs.has(input[j])) { 
              offPlugs.delete(input[j])
            }

          }
        }

        let offPlug = offPlugs.keys().next().value;
        plug.delete(offPlug);
        offCount++;
        plug.add(input[i]);
     }
    } 
  }
  console.log(offCount)
}
solution();