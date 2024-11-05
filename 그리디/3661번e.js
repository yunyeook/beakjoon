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
            }
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
      return mid;
    }
  }
};
function a(p, n, arr) {
  let sum = 0;
  let sortIndex = []; //가진돈 오름차순으로 인덱스로 저장
  let sortArr = []; //가진돈 오름차순 저장
  let result = Array(n).fill(0);
  let friends = n;
  let total = p;

  for (let i = n - 1; i >= 0; i--) {
    sum += arr[i];
    let inserted = binarySearch(sortArr, arr[i]);

    if (inserted == 0) {
      sortIndex.unshift(i);
      sortArr.unshift(arr[i]);
    } else if (inserted == sortArr.length) {
      sortIndex.push(i);
      sortArr.push(arr[i]);
    } else {
      sortIndex.splice(inserted, 0, i);
      sortArr.splice(inserted, 0, arr[i]);
    }
  }
  if (sum < p) {
    return 'IMPOSSIBLE';
  }
  let average = parseInt(total / friends);
  if (average > 0) {
    let newSum = 0;
    let newfriends = n;
    for (let i in arr) {
      let r = result[i] + average;
      if (arr[i] > r) {
        result[i] = r;
        newSum += r;
      } else {
        newSum += arr[i];
        result[i] = arr[i];
        newfriends--;
      }
    }
    total = p - newSum;
    friends = newfriends;
  }
  if (total > 0) {
    while (total > 0) {
      let max = sortArr[n - 1];
      for (let i = n - 1; i >= 0; i--) {
        if (sortArr[i] == max) {
          let index = sortIndex[i];
          result[index]++;
          total--;
          sortArr[i]--;
          if (total == 0) {
            break;
          }
        } else {
          break;
        }
      }
    }
  }
  let firstmax = 0;
  let secondmax = 0;
  for (let i = 0; i < n; i++) {
    if (result[i] > firstmax) {
      secondmax = firstmax;
      firstmax = result[i];
    }
  }

  if (firstmax - secondmax > 1) {
  }

  return result.join(' ');

  //  console.log(`sortIndex= ${sortIndex}`);
  //console.log(sortArr);
}
function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const cases = Number(input[0]);
  const lastCaseFirtIndex = 2 * cases - 1;

  let result = '';
  for (let i = 1; i <= lastCaseFirtIndex; i += 2) {
    let [p, n] = input[i].split(' ').map(Number);
    let arr = input[i + 1].split(' ').map(Number);
    if (i == lastCaseFirtIndex) {
      result += `${a(p, n, arr)}`;
    } else {
      result += `${a(p, n, arr)}\n`;
    }
  }
  console.log(result);
}
solution();
