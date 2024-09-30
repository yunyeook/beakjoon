solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');

  const [N, W, L] = input.shift().split(' ').map(Number);
  input = input[0].split(' ').map(Number);
  let index = input.length;
  if (input[0] > L) {
    return console.log(0); // 다리 하중보다 큰 트럭이 맨 앞에 있다면 ? 0초
  }
  for (let i in input) {
    if (input[i] > L) {
      //중간에 다리 하중보다 큰 트럭이 있으면 그전까지만 구하면 됨
      index = i;
      break;
    }
  }
  if (index != input.length) {
    let newInput = input.slice(0, index);
    truck(N, W, L, newInput);
  } else {
    truck(N, W, L, input);
  }
}

function truck(n, w, maxWeight, input) {
  let length = Array.from(Array(w), () => 0);
  let currentWeight = 0.1;
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (currentWeight === 0) {
      break;
    }

    if (currentWeight === 0.1) {
      currentWeight = 0;
    }

    if (currentWeight - length[0] + input[i] <= maxWeight) {
      currentWeight = currentWeight - length[0];
      length.shift();
      currentWeight = currentWeight + input[i];
      length.push(input[i]);
      count++;
    } else {
      currentWeight = currentWeight - length[0];
      length.shift();
      currentWeight = currentWeight + 0;
      length.push(0);
      count++;
      i--;
    }
  }
  count = count + w; // 맨마지막 트럭까지 다리에 올라갔으면 맨마지막 트럭이 다리 길이만큼 건너면 되니까!
  console.log(count);
}
