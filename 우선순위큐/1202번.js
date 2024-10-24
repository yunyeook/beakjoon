function jewelsEnqueue(arr, jewelArr) {
  let insertedIndex = arr.length;
  let currentIndex = insertedIndex;

  arr.push(jewelArr);
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
function jewelsDequeue(arr) {
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
function jewelsMaxEnqueue(arr, jewelArr) {
  let insertedIndex = arr.length;
  let currentIndex = insertedIndex;

  arr.push(jewelArr);
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

      if (arr[parentIndex][1] < arr[currentIndex][1]) {
        currentIndex = change(arr, currentIndex, parentIndex);
      } else {
        return;
      }
    }
    return;
  }
}
function jewelsMaxDequeue(arr) {
  if (arr.length == 0) {
    return 0;
  }

  change(arr, 0, arr.length - 1);
  let remove = arr.pop();

  let currentIndex = 0;
  while (currentIndex <= arr.length - 1) {
    let maxIndex = currentIndex;
    let max = arr[currentIndex][1];

    if (currentIndex * 2 + 1 <= arr.length - 1 && arr[currentIndex][1] < arr[currentIndex * 2 + 1][1]) {
      maxIndex = currentIndex * 2 + 1;
      max = arr[maxIndex][1];
    }

    if (currentIndex * 2 + 2 <= arr.length - 1 && max < arr[currentIndex * 2 + 2][1]) {
      maxIndex = currentIndex * 2 + 2;
      max = arr[maxIndex][1];
    }
    if (currentIndex != maxIndex) {
      currentIndex = change(arr, currentIndex, maxIndex);
    } else {
      break;
    }
  }
  return remove[1];
}

function change(arr, index1, index2) {
  let tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
  return index2;
}

function bagsDequeue(arr) {
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
function bagsEnqueue(arr, num) {
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

//용량이 작은 가방부터 채운다
//담을 수 잇는 보석 중 가격이 가장 높은 것을 담는다.!

solution();

function solution() {
  const fs = require('fs');
  let input = fs
   //.readFileSync('/dev/stdin')
   .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const [N, K] = input[0].toString().trim().split(' ').map(Number);

  let jewelsWeight = []; //무게가 작은 순으로 담기 [무게, 가격]
  for (let i = 1; i <= N; i++) {
    jewelsEnqueue(jewelsWeight, input[i].toString().trim().split(' ').map(Number));
  }

  let bags = []; //주머니크기 작은 순으로 담기
  for (let i = N + 1; i <= K + N; i++) {
    bagsEnqueue(bags, Number(input[i]));
  }

  let jewelsPrice = []; //가격 큰 순으로 넣기
  let pocket = null;
  let tmp = null;
  let result = 0;

  while (bags.length > 0) {
    pocket = bagsDequeue(bags);
    while (jewelsWeight.length > 0 && jewelsWeight[0][0] <= pocket) {
      tmp = jewelsDequeue(jewelsWeight);
      jewelsMaxEnqueue(jewelsPrice, tmp);
    }
    result += jewelsMaxDequeue(jewelsPrice);
  }
  console.log(result);
}

