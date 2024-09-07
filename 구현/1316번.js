function groupWord(arr) {
  let set = new Set();
  let removeset = new Set();
  let word;
  let result = 0;
  for (let i in arr) {
    set.clear();
    removeset.clear();
    word = arr[i].toString().trim().split('');
    //word = ["h","a","p,","p","y"]
    for (let j in word) {
      if (!set.has(word[j]) && !removeset.has(word[j])) {
        // 단어 없으면? 추가
        set.add(word[j]);
      } else {
        if (word[j] == word[j - 1]) {
          continue;
        } else {
          set.delete(word[j]);
          removeset.add(word[j]);
        }
      }
    }

    if (removeset.size == 0) {
      result++;
    }
  }
  console.log(result);
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
  input.shift();
  groupWord(input);
}
