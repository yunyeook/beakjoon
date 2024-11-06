function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  const [L, C] = input[0].split(' ').map(Number);
  let arr = input[1].split(' ').sort();

  let result = '';
  const combination = (selected, unselected, consCount, vowelCount) => {
    if (consCount + vowelCount === L) {
      if (consCount < 1 || vowelCount < 2) {
        return;
      } else {
        let arr = Array.from(selected);
        arr.sort();
        result += `${arr.join('')}\n`;
      }
    }

    unselected.forEach((elm, index) => {
      let unselect = [...unselected.slice(index + 1)];
      let cCount = consCount;
      let vCount = vowelCount;
      if (elm == 'a' || elm == 'e' || elm == 'i' || elm == 'o' || elm == 'u') {
        cCount++;
      } else {
        vCount++;
      }
      combination([...selected, elm], unselect, cCount, vCount);
    });
  };
  combination([], arr, 0, 0);
  console.log(result);
}
solution();
