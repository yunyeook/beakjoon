function minHeapEnqueue(arr, num) {
  let insertedIndex = arr.length;
  let currentIndex = insertedIndex;

  arr.push(num);
  let parentIndex = 0;
  if (currentIndex == parentIndex) {
    return;
  } else {
    while (currentIndex > 0) {
      if (currentIndex % 2 != 0) {
        parentIndex = (currentIndex - 1) / 2;
      } else {
        parentIndex = (currentIndex - 2) / 2;
      }

      if (arr[parentIndex] > arr[currentIndex]) {
        currentIndex = change(arr, currentIndex, parentIndex);
      } else {
        return;
      }
    }
    return;
  }
}
function minHeapDequeue(arr) {
  if (arr.length == 0) {
    return 0;
  }
  change(arr, 0, arr.length - 1);
  let remove = arr.pop();

  let currentIndex = 0;
  while (currentIndex <= arr.length - 1) {
    let minIndex = currentIndex;
    let min = arr[currentIndex];

    if (currentIndex * 2 + 1 <= arr.length - 1 && arr[currentIndex] > arr[currentIndex * 2 + 1]) {
      minIndex = currentIndex * 2 + 1;
      min = arr[minIndex];
    }
    if (currentIndex * 2 + 2 <= arr.length - 1 && min > arr[currentIndex * 2 + 2]) {
      minIndex = currentIndex * 2 + 2;
      min = arr[minIndex];
    }

    if (currentIndex != minIndex) {
      currentIndex = change(arr, currentIndex, minIndex);
    } else {
      break;
    }
  }
  return remove;
}
function change(arr, index1, index2) {
  let tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
  return index2;
}
function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  let [n, m] = input[0].split(' ').map(Number);
  input = input[1].split(' ').map(Number);
  let arr = [];
  for (let i in input) {
    let num = input[i];
    minHeapEnqueue(arr, num);
  }
  for (let i = m; i > 0; i--) {
    let num1 = BigInt(minHeapDequeue(arr));
    let num2 = BigInt(minHeapDequeue(arr));
    let sum = BigInt(num1) + BigInt(num2);
    minHeapEnqueue(arr, sum);
    minHeapEnqueue(arr, sum);
  }
  let result = BigInt(0);
  for (let i in arr) {
    result += BigInt(arr[i]);
  }
  console.log(result.toString());
}
solution();
