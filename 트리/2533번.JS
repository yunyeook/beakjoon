function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');

  const N = Number(input[0]);
  let nodes = {};
  let dp = {};
  for (let i = 1; i <= N; i++) {
    nodes[i] = { adj: new Set(), adjCount: 0 }; //have값이 있는 adj
    dp[i] = { 1: 0, 0: 0, min: null }; //1=얼리어답터일때 0=아닐때
  }

  for (let i = 1; i < N; i++) {
    input[i] = input[i].split(' ').map(Number);
    let num1 = input[i][0];
    let num2 = input[i][1];
    nodes[num1].adj.add(num2);
    nodes[num1].adjCount++;

    nodes[num2].adj.add(num1);
    nodes[num2].adjCount++;
  }
  let needToVisit = [];
  let visit = 0;
  let needToVisitSet = new Set();
  let visited = new Set();

  for (let i = 1; i <= N; i++) {
    if (nodes[i].adjCount == 1 && !needToVisitSet.has(i)) {
      dp[i][1] = 1;
      dp[i][0] = 0;
      dp[i].min = 0;
      visit++;
      visited.add(i);

      nodes[i].adj.forEach(elm => {
        if (!needToVisitSet.has(elm)) {
          // nodes[elm].adj.delete(i);
          // nodes[elm].have.add(i);
          nodes[elm].adjCount--;

          if (nodes[elm].adjCount == 1) {
            needToVisit.push(elm);
            needToVisitSet.add(elm);
          }
        }
      });
      delete nodes[i];
    }
  }

  let result = 0;
  while (visit < N) {
    if (needToVisit.length > 0) {
      let dequeue = needToVisit.pop();

      nodes[dequeue].adj.forEach(elm => {
        if (visited.has(elm)) {
          dp[dequeue][0] += dp[elm][1];
          dp[dequeue][1] += dp[elm].min;
        } else {
          nodes[elm].adjCount--;
        }
      });
      dp[dequeue][1] += 1;
      dp[dequeue].min = Math.min(dp[dequeue][0], dp[dequeue][1]);
      visit++;
      visited.add(dequeue);
      if (visit == N) {
        result = dp[dequeue].min;
        break;
      }
      delete nodes[dequeue];
    } else {
      for (let i in nodes) {
        if (nodes[i].adjCount == 1 && !visited.has(i)) {
          needToVisit.push(Number(i));
        } else if (nodes[i].adjCount == 0 && !visited.has(i)) {
          needToVisit.push(Number(i));
          break;
        }
      }
    }
  }
  console.log(result);
}
solution();
