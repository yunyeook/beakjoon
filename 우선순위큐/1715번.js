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
      currentIndex = change(arr, currentIndex, parentIndex);
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

  change(arr, 0, arr.length - 1);
  let remove = arr.pop();

  let currentIndex = 0;
  while (currentIndex <= arr.length - 1) {
    let minIndex = currentIndex; //현재인덱스 저장
    let min = arr[currentIndex]; // 현재인덱스의 배열값
    //부무와 왼쪽 비교한 값 -> 오른쪽 있으면 비교한 값과 비교

    // 왼쪽 자식만 있는 경우
    //왼쪽 자식이 더 작으면 min값과 minIndex 업데이트
    if (currentIndex * 2 + 1 <= arr.length - 1 && arr[currentIndex] > arr[currentIndex * 2 + 1]) {
      minIndex = currentIndex * 2 + 1;
      min = arr[minIndex];
    }
    //오른쪽 자식도 있는경우 앞서 비교한 min값과 비교해 더 작으면 업데이트
    if (currentIndex * 2 + 2 <= arr.length - 1 && min > arr[currentIndex * 2 + 2]) {
      minIndex = currentIndex * 2 + 2;
      min = arr[minIndex];
    }
    if (currentIndex != minIndex) {
      //min값이 자식이라면 currentIndex도 업데이트하기
      currentIndex = change(arr, currentIndex, minIndex);
    } else {
      break;
    }
  }
  return remove;
}

solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync('/dev/stdin')
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n')
    .map(Number);
  let count = input.shift();
  if (count == 1) {
    console.log(0);
  } else {
    let arr = [];
    for (let i in input) {
      enqueue(input[i], arr);
    }
    console.log(arr.length);
    let result1 = 0;
    let result2 = 0;
    let addresult = 0;
    let addResults = 0;

    while (arr.length > 1) {
      result1 = dequeue(arr);
      result2 = dequeue(arr);
      addresult = result1 + result2;
      addResults += addresult;
      enqueue(addresult, arr);
    }
    console.log(addResults);
  }
}
