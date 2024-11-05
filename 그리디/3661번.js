const binarySearch = function (arr, target) {
  if (arr.length < 1) {
    return 0;
  } else {
    if (arr[arr.length - 1] <= target) {
      return arr.length;
    } else if (arr[0] >= target) {
      return 0;
    } else {
      let start = 0;
      let end = arr.length - 1;
      let mid;
      while (start < end) {
        mid = parseInt((start + end) / 2);
        if (target === arr[mid]) {
          start = end;
        } else {
          if (target < arr[mid]) {
            end = mid - 1;
            if (target >= arr[end]) {
              start = end;
            } else {
              //target > arr[mid]
              start = mid + 1;
              if (arr[start] >= target) {
                start = end;
                mid = start;
              }
            }
          }
        }
      }
    }
    return mid;
  }
};
function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  let result = Array(arr[1]);
  function present(p, n, arr, result) {
    let minIndex = [];
    let min = Infinity;
    let total = arr[0];
    let sum = 0;
    let friendsCount = n;
    let decide = 0;
    //최소값찾기
    for (let i in arr) {
      sum += arr[i];
      if (min == arr[i]) {
        minIndex.push(i);
        decide++;
      } else if (min > arr[i]) {
        min = arr[i];
        minIndex = [i];
        decide = 1;
      }
    }
    if (sum < arr[0]) {
      return 'IMPOSSIBLE';
    }
    let average = parseInt(total / friendsCount);
    if (average <= min) {
      let resultArr = Array(n).fill(average);
      return resultArr.join(' ');
    }

    for (let i in minIndex) {
      arr[minIndex[i]] = 0;
      result[minIndex[i]] = min;
    }
    let previousMin = min;
    total -= min * friendsCount;
    minIndex = [];
    min = Infinity;
    friendsCount -= decide;
    average = parseInt(total / friendsCount);
    while (decide < n) {
      if (average == 0) {
        arr.sort((a, b) => {
          return a - b;
        });
        let num = arr[friendsCount - total - 1];
        if (result) {
        }
      } else {
      }

      //최소값찾기
      for (let i in arr) {
        let newdecide = 0;
        if (arr[i] > 0) {
          if (min == arr[i]) {
            minIndex.push(i);
            newdecide++;
          } else if (min > arr[i]) {
            min = arr[i];
            minIndex = [i];
            newdecide = 1;
          }
        }
        decide = newdecide;
      }

      for (let i in minIndex) {
        result[minIndex[i]] = arr[i];
      }
    }

    for (let i in minIndex) {
      arr[minIndex[i]] = 0;
      result[minIndex[i]] = min;
      //저장한걸 0으로 바꿀까..
    }
  }
}
solution();
