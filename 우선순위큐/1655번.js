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

function maxHeapEnqueue(arr, num) {
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

      if (arr[parentIndex] < arr[currentIndex]) {
        currentIndex = change(arr, currentIndex, parentIndex);
      } else {
        return;
      }
    }
    return;
  }
}
function maxHeapDequeue(arr) {
  if (arr.length == 0) {
    return 0;
  }

  change(arr, 0, arr.length - 1);
  let remove = arr.pop();

  let currentIndex = 0;
  while (currentIndex <= arr.length - 1) {
    let maxIndex = currentIndex;
    let max = arr[currentIndex];

    if (currentIndex * 2 + 1 <= arr.length - 1 && arr[currentIndex] < arr[currentIndex * 2 + 1]) {
      maxIndex = currentIndex * 2 + 1;
      max = arr[maxIndex];
    }

    if (currentIndex * 2 + 2 <= arr.length - 1 && max < arr[currentIndex * 2 + 2]) {
      maxIndex = currentIndex * 2 + 2;
      max = arr[maxIndex];
    }
    if (currentIndex != maxIndex) {
      currentIndex = change(arr, currentIndex, maxIndex);
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
function midValue(insertNum, minArr, maxArr, mid) {
  //배열의 길이가 무조건 min<max이도록 설정한다!!
  if (mid == Infinity) {
    mid = insertNum;
  } else {
    //삽입하려는 값이 현재 중간값보다 크거나 같을때 큰값들에 넣음
    if (insertNum >= mid) {
      minHeapEnqueue(maxArr, insertNum);

      if (minArr.length < maxArr.length - 1) {
        maxHeapEnqueue(minArr, mid);
        mid = minHeapDequeue(maxArr);
      }

      //삽입하려는 값이 현재 중간값보다 작거나 같을 때 작은값들에 넣음
    } else {
      maxHeapEnqueue(minArr, insertNum);

      if (maxArr.length < minArr.length) {
        minHeapEnqueue(maxArr, mid);
        mid = maxHeapDequeue(minArr);
      }
    }
  }

  return mid;
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
  input.shift();

  let mid = Infinity;
  let minArr = [];
  let maxArr = [];
  let result = '';

  for (let i in input) {
    mid = midValue(input[i], minArr, maxArr, mid);
    result += `${mid}\n`;
  }
  result = result.slice(0, -1);
  console.log(result);
}
