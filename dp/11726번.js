function tiling_2n(n) {
    const dp = {}; //n : 경우의 수
    for (let i = 1; i <= n; i++) {
        if (i === 1) {
            dp[1] = 1;
        } else if (i === 2) {
            dp[2] = 2;
        } else {
            dp[i] = (dp[i - 2] + dp[i - 1]) % 10007;
        }
    }
    console.log(dp[n]);
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
    // console.log(input);

    tiling_2n(input[0]);
}
