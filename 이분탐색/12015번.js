/*가장 긴 증가하는 부분수열

이분탐색
const binarySearch = function (arr, target) {
  let start = 0;
  let end = arr.length-1;
  let mid;
  
  while(start<=end){ //점점 좁혀지다가 start와 end의 순서가 어긋나게 되면 반복을 종료한다
  mid = parseInt((start+end)/2)
  if(target === arr[mid]){
    return mid;
  } else{
    if(target<arr[mid]){
      end = mid-1
    }
    else{
      start = mid+1
    }
  }
  }
  return -1

};
*/
function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  let N = Number(input[0]);
  let newInput = input[1].split(' ').map(Number);
  let arr = []; //arr배열을 이분탐색하기
  for (let i = 0; i < N; i++) {
    let num = newInput[i];
    if (i == 0 || arr[arr.length - 1] < num) {
      arr.push(num);
    } else if (arr[0] > num) {
      arr[0] = num;
    } else {
      let startIndex = 0;
      let endIndex = arr.length - 1;
      if (startIndex == endIndex) {
        arr[startIndex] = num;
        continue;
      }

      let midIndex;
      while (startIndex < endIndex) {
        midIndex = Math.floor((endIndex + startIndex) / 2);
        if (arr[midIndex] == num) {
          break;
        }
        if (arr[midIndex] > num) {
          endIndex = midIndex - 1;
          //수열의 값이 arr[end]보다 크고 end!=start라면 mid값이 다시 갱신되므로 멈춰야하므로 start에 end를 넣음.
          if (arr[endIndex] < num) {
            startIndex = endIndex;
          }
        } else if (arr[midIndex] < num) {
          startIndex = midIndex + 1;
          //수열의 값이 arr[start]보다 작고 start!=end라면 mid값이 다시 갱신되므로 멈춰야하므로 end에 start를 넣음.
          if (arr[startIndex] > num) {
            endIndex = startIndex;
          }
        }
      }
      if (startIndex == endIndex) {
        if (startIndex < midIndex) {
          if (arr[startIndex] > num) {
            arr[startIndex] = num;
          } else if (arr[startIndex] < num) {
            arr[midIndex] = num;
          }
        } else if (startIndex > midIndex) {
          if (arr[midIndex] > num) {
            arr[midIndex] = num;
          } else if (arr[midIndex] < num) {
            arr[startIndex] = num;
          }
        }
      }
    }
  }
  console.log(arr.length);
}
solution();
