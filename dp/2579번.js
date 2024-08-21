function goUpStairs(arr) {
    const dp = new Array(arr[0] + 1); // 행의 개수
    for (let i = 0; i < arr[0] + 1; i++) {
        dp[i] = new Array(3); // 열의 개수
        if (i == 0) {
            dp[i][0] = 0;
            dp[i][1] = 0;
            dp[i][2] = 0;
        }
    }
    for (let row = 1; row <= arr[0]; row++) {
        for (let column = 0; column <= 2; column++) {
            //계단 밟지 않는경우 : 이전에 밟은 경우들중 비교해 더 큰 값 넣기
            if (column == 0) {
                dp[row][column] = Math.max(dp[row - 1][column + 1], dp[row - 1][column + 2]);

                //계단 밟은 경우 : 1번 밟은 경우, 2번연속 밟은경우
            } else {
                dp[row][column] = dp[row - 1][column - 1] + arr[row];
            }
        }
    }
    console.log(Math.max(dp[arr[0]][1], dp[arr[0]][2]));
}

solution();

function solution() {
    const fs = require("fs");
    let input = fs
        //.readFileSync("/dev/stdin")
        .readFileSync("/Users/hansol/Projects/yeook/백준/input.txt")
        .toString()
        .trim()
        .split("\n")
        .map(Number);
    console.log(input);

    goUpStairs(input);
}
