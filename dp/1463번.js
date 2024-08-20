function makeOne(N) {
    const dp = {}; //dp[i] : 최소연산횟수
    dp[1] = 0;
    for (let i = 2; i <= N; i++) {
        if (i % 3 == 0) {
            i3 = dp[i / 3] + 1;
        } else {
            i3 = Infinity;
        }

        if (i % 2 == 0) {
            i2 = dp[i / 2] + 1;
        } else {
            i2 = Infinity;
        }

        i1 = dp[i - 1] + 1;

        dp[i] = Math.min(i1, i2, i3);
    }
    console.log(dp[N]);
}

// console.log(makeOne(10));

solution();

function solution() {
    const fs = require("fs");
    let input = fs
        .readFileSync("/dev/stdin")
        // .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim()
        .split("\n")
        .map(Number);
    // console.log(input);
    makeOne(input[0]);
}
