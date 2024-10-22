function change(arr, index1, index2) {
  let tmp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = tmp;
  return index2;
}

function minHeapEnqueue(arr, obj) {
  let insertedIndex = arr.length;
  let currentIndex = insertedIndex;

  arr.push(obj);
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

      if (arr[parentIndex].distance > arr[currentIndex].distance) {
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
    let min = arr[currentIndex].distance;

    if (currentIndex * 2 + 1 <= arr.length - 1 && arr[currentIndex].distance > arr[currentIndex * 2 + 1].distance) {
      minIndex = currentIndex * 2 + 1;
      min = arr[minIndex].distance;
    }
    if (currentIndex * 2 + 2 <= arr.length - 1 && min > arr[currentIndex * 2 + 2].distance) {
      minIndex = currentIndex * 2 + 2;
      min = arr[minIndex].distance;
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
    .readFileSync("/dev/stdin")
    //.readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');
  const N = Number(input.shift())
  const M = Number(input.shift())
  let vertices = {}
  let shortest = {}
  let [start, end] = input[M].split(' ').map(Number)
  for (let i = 1; i <= N; i++) {
    vertices[i] = {}
    if (start == i) {
      shortest[i] = 0
    } else {
      shortest[i] = Infinity
    }

  }
  for (let i = 0; i < M; i++) {
    input[i] = input[i].split(' ').map(Number)
    if (vertices[input[i][0]][input[i][1]] == undefined) {
      vertices[input[i][0]][input[i][1]] = input[i][2]
    } else if (vertices[input[i][0]][input[i][1]] > input[i][2]) {
      vertices[input[i][0]][input[i][1]] = input[i][2]
    }

  }

  let visit = new Set()
  let needToVisit = []
  needToVisit.push({
    city: start,
    distance: 0
  })
  while (needToVisit.length != 0) {
    let dequeue = minHeapDequeue(needToVisit).city
    visit.add(dequeue)
    for (let citynum in vertices[dequeue]) {
      if (visit.has(citynum)) {
        continue
      }
      let d = shortest[dequeue] + vertices[dequeue][citynum]
      if (d < shortest[citynum]) {
        shortest[citynum] = d;
        minHeapEnqueue(needToVisit, {
          city: citynum,
          distance: d
        })
      }

    }



  }

  console.log(shortest[end])

}
solution();