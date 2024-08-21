function RGB(arr) {
    const dp = new Array(arr[0][0]);
    for (let i = 0; i <= arr[0][0]; i++) {
        dp[i] = new Array(3);
        dp[0][i] = 0;
    }

    for (let i = 1; i <= arr[0][0]; i++) {
        for (let j = 0; j <= 2; j++) {
            if (j == 0) {
                dp[i][j] = Math.min(dp[i - 1][j + 1], dp[i - 1][j + 2]) + arr[i][j];
            } else if (j == 1) {
                dp[i][j] = Math.min(dp[i - 1][j + 1], dp[i - 1][j - 1]) + arr[i][j];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j - 2]) + arr[i][j];
            }
        }
    }

    console.log(Math.min(dp[arr[0][0]][0], dp[arr[0][0]][1], dp[arr[0][0]][2]));
}

solution();

function solution() {
    const fs = require("fs");
    let input = fs
        //.readFileSync("/dev/stdin")
        .readFileSync("/Users/hansol/Projects/yeook/백준/input.txt")
        .toString()
        .trim()
        .split("\n");

    let newInput = [];
    for (let i in input) {
        let inputArr = input[i].toString().trim().split(" ").map(Number);
        newInput.push(inputArr);
        if (i == 0) {
            newInput[i].push(0);
            newInput[i].push(0);
        }
    }

    // console.log(newInput);
    RGB(newInput);
}
