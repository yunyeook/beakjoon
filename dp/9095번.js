function plus123(n, dp) {
    if (n > 3) {
        for (let i = 4; i <= n; i++) {
            if (dp[i] == null) {
                dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
            } else {
                continue;
            }
        }
    }

    console.log(dp[n] + "\n");
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

    const dp = {};
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    for (let i = 1; i <= input[0]; i++) {
        plus123(input[i], dp);
    }
}
