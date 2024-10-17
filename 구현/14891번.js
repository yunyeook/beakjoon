function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('/Users/hansol/yunyeook/백준/input.txt')
    .toString()
    .trim()
    .split('\n');
  let cogwheels = Array(4);
  for (let i = 0; i < 4; i++) {
    cogwheels[i] = input.shift().split('').map(Number);
  }
  let connect = Array(3);
  for (let i = 0; i <= 2; i++) {
    if (cogwheels[i][2] == cogwheels[i + 1][6]) {
      connect[i] = true;
    } else {
      connect[i] = false;
    }
  }
  function rotation(arr, d) {
    if (d < 0) {
      let tmp = arr.shift();
      arr.push(tmp);
    } else {
      let tmp = arr.pop();
      arr.unshift(tmp);
    }
  }

  input.shift();
  let turnDirection;
  for (let i in input) {
    input[i] = input[i].split(' ').map(Number);
    if (input[i][0] == 1) {
      // 012 123
      if (input[i][1] < 0) {
        rotation(cogwheels[0], -1);
        turnDirection = -1;
      } else if (input[i][1] > 0) {
        rotation(cogwheels[0], 1);
        turnDirection = 1;
      }
      for (let j = 0; j < 3; j++) {
        if (connect[j] == false) {
          if (turnDirection < 0) {
            rotation(cogwheels[j + 1], 1);
            turnDirection = 1;
          } else {
            rotation(cogwheels[j + 1], -1);
            turnDirection = -1;
          }
        } else {
          break;
        }
      }
    } else if (input[i][0] == 2) {
      //012 023
      if (input[i][1] < 0) {
        rotation(cogwheels[1], -1);
        turnDirection = -1;
      } else if (input[i][1] > 0) {
        rotation(cogwheels[1], 1);
        turnDirection = 1;
      }
      for (let j = 0; j < 3; j++) {
        if (j == 0) {
          if (connect[j] == false) {
            if (turnDirection < 0) {
              rotation(cogwheels[j], 1);
            } else {
              rotation(cogwheels[j], -1);
            }
          } else if (connect[0] == true && connect[1] == false) {
            continue;
          } else {
            break;
          }
        } else {
          if (connect[j] == false) {
            if (turnDirection < 0) {
              rotation(cogwheels[j + 1], 1);
              turnDirection = 1;
            } else {
              rotation(cogwheels[j + 1], -1);
              turnDirection = -1;
            }
          } else {
            break;
          }
        }
      }
    } else if (input[i][0] == 3) {
      if (input[i][1] < 0) {
        rotation(cogwheels[2], -1);
        turnDirection = -1;
      } else if (input[i][1] > 0) {
        rotation(cogwheels[2], 1);
        turnDirection = 1;
      }
      for (let j = 2; j >= 0; j--) {
        if (j == 2) {
          if (connect[j] == false) {
            if (turnDirection < 0) {
              rotation(cogwheels[j + 1], 1);
            } else {
              rotation(cogwheels[j + 1], -1);
            }
          } else if (connect[2] == true && connect[1] == false) {
            continue;
          } else {
            break;
          }
        } else {
          if (connect[j] == false) {
            if (turnDirection < 0) {
              rotation(cogwheels[j], 1);
              turnDirection = 1;
            } else {
              rotation(cogwheels[j], -1);
              turnDirection = -1;
            }
          } else {
            break;
          }
        }
      }
    } else if (input[i][0] == 4) {
      if (input[i][1] < 0) {
        rotation(cogwheels[3], -1);
        turnDirection = -1;
      } else if (input[i][1] > 0) {
        rotation(cogwheels[3], 1);
        turnDirection = 1;
      }
      for (let j = 2; j >= 0; j--) {
        if (connect[j] == false) {
          if (turnDirection < 0) {
            rotation(cogwheels[j], 1);
            turnDirection = 1;
          } else {
            rotation(cogwheels[j], -1);
            turnDirection = -1;
          }
        } else {
          break;
        }
      }
    }
    for (let k = 0; k <= 2; k++) {
      if (cogwheels[k][2] == cogwheels[k + 1][6]) {
        connect[k] = true;
      } else {
        connect[k] = false;
      }
    }
  }
  let result = 0;
  for (let i = 0; i < 4; i++) {
    if (cogwheels[i][0] == 1) {
      result += 2 ** i;
    }
  }
  console.log(result);
}
solution();
