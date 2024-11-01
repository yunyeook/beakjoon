solution();

function solution() {
  const fs = require('fs');
  let input = fs
    //.readFileSync("/dev/stdin")
    .readFileSync('C:/Users/user/Desktop/여옥이폴더/yunyeook/beakjoon/input.txt')
    .toString()
    .trim()
    .split('\n');
  let zeroCount = 0;
  let wall = new Set()
  let wallx = new Set()
  let wally = new Set()
  let cctv = [] //[숫자좌표,x,y, cctv번호]
  let five = [] //[x,y]
  let [N, M] = input.shift().split(' ').map(Number)
  for (let i in input) {
    input[i] = input[i].split(' ').map(Number)
    for (let j = 0; j < M; j++) {
      if (input[i][j] == 0) {
        zeroCount++
      } else {
        let coord = i * M + j
        if (input[i][j] == 6) {
          wall.add(coord)
          wallx.add(i)
          wally.add(j)
        } else if (input[i][j] == 5) {
          five.push([i, j])
        } else if (input[i][j] == 1) {
          cctv.push([coord, i, j, input[i][j],
            [new Set(), new Set(), new Set(), new Set()]
          ])
        } else if (input[i][j] == 2) {
          cctv.push([coord, i, j, input[i][j],
            [new Set(), new Set(), new Set(), new Set()]
          ])
        } else if (input[i][j] == 3) {
          cctv.push([coord, i, j, input[i][j],
            [new Set(), new Set(), new Set(), new Set()]
          ])
        } else if (input[i][j] == 4) {
          cctv.push([coord, i, j, input[i][j],
            [new Set(), new Set(), new Set(), new Set()]
          ])
        }
      }
    }
  }

  for (let i = 0; i < cctv.length; i++) {
    let coord = cctv[i][0]
    let x = cctv[i][1]
    let y = cctv[i][2]
    let ccnum = cctv[i][3]



  }
  if (five.length != 0) {
    for (let i = 0; i < five.length; i++) {
      let x = five[i][0]
      let y = five[i][1]
      let left = y - 1
      let right = y + 1
      let up = x - 1;
      let dawn = x + 1
      while (left >= 0) {
        if (input[x][left] == 6) {
          break;
        }
        input[x][left] = '#'
        left--;
      }
      while (right < M) {
        if (input[y][right] == 6) {
          break;
        }
        input[x][right] = '#';
        right++;
      }
      while (up >= 0) {
        if (input[up][y] == 6) {
          break;
        }
        input[up][y] = '#';
        up--;
      }
      while (dawn < N) {
        if (input[dawn][y] == 6) {
          break;
        }
        input[dawn][y] = '#';
        dawn++;
      }
    }
  }
}