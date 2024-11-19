function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const T = Number(input[0]);
  const last = T * 5;
  let result = '';
  for (let i = 1; i < last; i += 5) {
    //테스트 케이스
    let [k, n] = input[i].split(' ').map(Number);
    let arr = [];
    for (let j = i + 1; j <= i + 4; j++) {
      arr.push(input[j].split(' ').map(Number));
    }
    //-----------------------------------------
    let sum1 = [];
    let sum2 = [];
    for (let j = 0; j < n; j++) {
      for (let l = 0; l < n; l++) {
        let num = arr[0][j] + arr[1][l];
        let inserted = binarySearch(sum1, num);
        if (inserted == sum1.length) {
          sum1.push(num);
        } else {
          sum1.splice(inserted, 0, num);
        }
      }
    }
    for (let j = 0; j < n; j++) {
      for (let l = 0; l < n; l++) {
        let num = arr[2][j] + arr[3][l];
        let inserted = binarySearch(sum2, num);
        if (inserted == sum2.length) {
          sum2.push(num);
        } else {
          sum2.splice(inserted, 0, num);
        }
      }
    }
    let total = null;
    for (let j = 0; j < sum1.length; j++) {
      let num = k - sum1[j];
      let bnum = binary2(sum2, num) + sum1[j];
      if (!total) {
        total = bnum;
      } else {
        if (Math.abs(k - total) > Math.abs(k - bnum)) {
          total = bnum;
        }
        if (Math.abs(k - total) == Math.abs(k - bnum)) {
          if (total > bnum) {
            total = bnum;
          }
        }
      }
    }
    result += `${total}\n`;
  }
  console.log(result.slice(0, -1));
}
solution();

function binarySearch(arr, num) {
  if (arr.length == 0 || arr[0] >= num) {
    return 0;
  } else {
    if (arr[arr.length - 1] <= num) {
      return arr.length;
    } else {
      let start = 0;
      let end = arr.length - 1;
      let mid;
      while (start < end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] == num) {
          return mid;
        } else if (arr[mid] > num) {
          end = mid - 1;
          if (num >= arr[end]) {
            return mid;
          }
        } else {
          start = mid + 1;
          if (num <= arr[start]) {
            return start;
          }
        }
      }
      if (start == end) {
        return start;
      }
    }
  }
}

function binary2(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  while (start < end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] == num) {
      return arr[mid];
    } else if (arr[mid] > num) {
      end = mid;
    } else {
      start = mid;
    }
    if (end - start == 1) {
      break;
    }
  }
  if (Math.abs(num - arr[start]) > Math.abs(num - arr[end])) {
    return arr[end];
  } else {
    return arr[start];
  }
}
