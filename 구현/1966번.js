/* 
1.해당 배열을 내림차순으로 정렬하여 새로운 배열에 저장한다. (기존 배열과 새로운 배열의 구성은 같고 순서만 다른것이다!! )
2. 타겟의 인덱스를 기억하고 해당인덱스가 나오기 전까지 인덱스를 -1한다(0보다 작으면 맨뒤로 인덱스로 바꿈.)
3. 나오는 조건 : 타겟의 인덱스가 0이고 중요도가 가장 높아야 한다!!
*/
function printerQueue(arr, index) {
  let currentindex = index;
  //중요도가 큰순서대로
  let sortedArr = [...arr].sort((a, b) => {
    return b - a;
  });
  let count = 0;
  //(currentindex == 0 && sortedArr[0] <= arr[0]) 는 해당 문서가 나오는 경우
  while (!(currentindex == 0 && sortedArr[0] == arr[0])) {
    if (sortedArr[0] == arr[0]) {
      arr.shift();
      count++;
      sortedArr.shift();
    } else {
      arr.push(arr.shift());
    }
    currentindex--;
    if (currentindex < 0) {
      currentindex = arr.length - 1;
    }
  }
  count++;
  return count;
}

solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');
  let newInput = [];
  for (let i = 0; i < input.length - 1; i++) {
    newInput[i] = input[i + 1].trim().split(' ').map(Number);
  }
  // console.log(newInput);

  for (let i = 0; i < newInput.length; i += 2) {
    console.log(printerQueue(newInput[i + 1], newInput[i][1]));
  }
}
