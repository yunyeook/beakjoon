const binarySearch = function (arr, target) {
  //역순 정렬일때 .. 5 4 3 2 1
  let start = 0;
  let end = arr.length - 1;
  let mid;

  while (start < end) {
    mid = parseInt((start + end) / 2);
    if (target === arr[mid]) {
      start = end;
      break;
    } else {
      if (target < arr[mid]) {
        start = mid + 1;
        if (target >= arr[start]) {
          end = start;
          mid = start;
        } else {
          //target > arr[mid]
          end = mid - 1;
          if (arr[end] >= target) {
            start = end;
          }
        }
      }
    }
  }
  return mid;
};

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');

  const [N, K] = input[0].split(' ').map(Number); //N 책의 개수, K선택 개수
  let bookCount = {}; //각 책마다 개수 저장하기
  let sort = {}; //각 책마다 가격 높은 순으로 정렬하기
  let kk = {}; //ex) 5개 골랐을때 최대

  //bookcount, sort 저장하기
  for (let i = 1; i <= N; i++) {
    input[i] = input[i].split(' ').map(Number);
    let C = input[i][0];
    let G = input[i][1]; //G 장르

    if (!bookCount[G]) {
      bookCount[G] = 1;
    } else {
      bookCount[G]++;
    }

    if (!sort[G]) {
      sort[G] = [C];
    } else if (sort[G][0] <= C) {
      sort[G].unshift(C);
    } else if (sort[G][sort[G].length - 1] >= C) {
      sort[G].push(C);
    } else {
      let inseted = binarySearch(sort[G], C);
      sort[G].splice(inseted, 0, C);
      if (bookCount[G] > K) {
        bookCount[G]--;
        sort[G].pop();
      }
    }
  }
  const kinds = Object.keys(bookCount).length;
  //sort를 누적합으로 재저장하기
  let maxLength = 0;
  for (let key in sort) {
    maxLength = Math.max(maxLength, bookCount[key]);
    if (bookCount[key] > 1) {
      for (let i = 1; i < bookCount[key]; i++) {
        sort[key][i] = sort[key][i - 1] + sort[key][i] + i * 2;
      }
    }
  }
  for (let i = maxLength; i > 0; i--) {
    kk[i] = [];
    let index = i - 1;
    for (let key in sort) {
      //해당 인덱스를가지고있다면
      if (bookCount[key] >= i) {
        let value = sort[key][index];
        if (kk[i].length == 0) {
          kk[i].push(value);
        } else {
          if (kk[i][kk[i].length - 1] >= value) {
            kk[i].push(value);
          } else if (kk[i][0] <= value) {
            kk[i].unshift(value);
          } else {
            let inserted = binarySearch(kk[i], value);
            kk[i].split(inserted, 0, value);
          }
        }
      }
    }
  }
  for (let key in sort) {
    if (kk[key].length >= 2) {
      let last = kk[key].length - 2;
      for (let i = last; i >= 0; i--) {
        kk[key][i] = kk[key][i] + kk[key][i + 1];
      }
    }
  }
  var max = 0;

  function dfs(key, selected, count) {
    if (count > K) {
    }
    dfs(key + 1, [...selected], count);
    dfs(key + 1, [...selected, key + 1], count);
  }

  console.log(bookCount);
  console.log(sort);
  console.log(maxLength);
  console.log(kk);
}
solution();
