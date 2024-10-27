function change(arr, index1, index2) {
  let tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
  return index2;
}

function minHeapEnqueue2(arr,num) {
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

      if (arr[parentIndex][0] > arr[currentIndex][0]) {
        currentIndex = change(arr, currentIndex, parentIndex);
      } else {
        return;
      }
    }
    return;
  }
}
function minHeapDequeue2(arr) {
  if (arr.length == 0) {
    return 0;
  }
  change(arr, 0, arr.length - 1);
  let remove = arr.pop();

  let currentIndex = 0;
  while (currentIndex <= arr.length - 1) {
    let minIndex = currentIndex;
    let min = arr[currentIndex][0];

    if (currentIndex * 2 + 1 <= arr.length - 1 && arr[currentIndex][0] > arr[currentIndex * 2 + 1][0]) {
      minIndex = currentIndex * 2 + 1;
      min = arr[minIndex][0];
    }
    if (currentIndex * 2 + 2 <= arr.length - 1 && min > arr[currentIndex * 2 + 2][0]) {
      minIndex = currentIndex * 2 + 2;
      min = arr[minIndex][0];
    }

    if (currentIndex != minIndex) {
      currentIndex = change(arr, currentIndex, minIndex);
    } else {
      break;
    }
  }
  return remove;
}
function minHeapEnqueue(arr,num) {
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
    let min = arr[currentIndex]

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
function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  let newInput =[]
  for (let i = 1; i <= input[0];i++) {
    input[i] = input[i].split(' ').map(Number);
    minHeapEnqueue2(newInput, input[i]);
  }
 

  let arr = [];//끝나는 시간 저장
  while(newInput.length>0) {
    let dequeue = minHeapDequeue2(newInput);
    let startTime = dequeue[0];
    let endTime = dequeue[1];
    if (arr.length == 0) {
      arr.push(endTime);
    } else { 
      if (arr[0] <= startTime) {
        minHeapDequeue(arr);
      }
      minHeapEnqueue(arr, endTime);
    }
  }
  console.log(arr.length);
}


solution();
