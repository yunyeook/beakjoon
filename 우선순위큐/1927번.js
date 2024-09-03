//root index == 0
function enqueue(num, arr) {
  let insertedIndex = arr.length;
  let currentIndex = insertedIndex;
  arr.push(num);
  let parentIndex = 0;
  //처음삽입하는 경우
  if (currentIndex == parentIndex) {
    return;
  }
  while (currentIndex > 0) {
    //짝수인경우 ==right
    if (currentIndex % 2 == 0) {
      parentIndex = (currentIndex - 2) / 2;
      //홀수인경우 ==left
    } else {
      //index1인경우 부모인덱스 구하는 게 마이너스 나오므로
      if (currentIndex == 1) {
        parentIndex = 0;
      } else {
        parentIndex = (currentIndex - 1) / 2;
      }
    }

    if (arr[parentIndex] > arr[currentIndex]) {
      let tmp = arr[parentIndex];
      arr[parentIndex] = arr[currentIndex];
      arr[currentIndex] = tmp;
      currentIndex = parentIndex;
    } else {
      return;
    }
  }
}
function change(arr, index1, index2) {
  let tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
  return index2;
}

function dequeue(arr) {
  if (arr.length == 0) {
    return 0;
  }

  let tmp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = tmp;
  let remove = arr.pop();

  let currentIndex = 0;
  while (currentIndex <= arr.length - 1) {
    if (currentIndex * 2 + 1 > arr.length - 1) {
      break;
    }
    if (arr.length <= 2) {
      if (arr.length == 2) {
        if (arr[0] > arr[1]) {
          change(arr, 0, 1);
        }
      }
      break;
    }
    if (
      (arr[currentIndex] <= arr[currentIndex * 2 + 1] && arr[currentIndex] <= arr[currentIndex * 2 + 2]) ||
      (currentIndex * 2 + 2 > arr.length - 1 && arr[currentIndex] <= arr[currentIndex * 2 + 1])
    ) {
      break;
    }
    //두 자식이 더 작을때
    if (arr[currentIndex] >= arr[currentIndex * 2 + 1] && arr[currentIndex] >= arr[currentIndex * 2 + 2]) {
      //왼쪽 자식이 더작을때
      if (arr[currentIndex * 2 + 1] <= arr[currentIndex * 2 + 2]) {
        currentIndex = change(arr, currentIndex, currentIndex * 2 + 1);
        //오른쪽자식이 더 작을때
      } else if (arr[currentIndex * 2 + 1] >= arr[currentIndex * 2 + 2]) {
        currentIndex = change(arr, currentIndex, currentIndex * 2 + 2);
      }
    }
    //왼쪽자식만 작을때
    else if (arr[currentIndex] >= arr[currentIndex * 2 + 1]) {
      currentIndex = change(arr, currentIndex, currentIndex * 2 + 1);
    }
    //오른쪽자식만 작을때
    else if (arr[currentIndex] >= arr[currentIndex * 2 + 2]) {
      currentIndex = change(arr, currentIndex, currentIndex * 2 + 2);
    }
  }
  return remove;
}

solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);
  input.shift();
  // console.log(input);

  let arr = [];

  let result = '';
  for (let i in input) {
    if (input[i] == 0) {
      result += `${dequeue(arr)}\n`;
    } else {
      enqueue(input[i], arr);
    }
  }
  result = result.slice(0, -1);
  console.log(result);
}
