function fibonacci(n) {
    let count_0 = {};
    let count_1 = {};
    for (let i = 0; i <= n; i++) {
        if (i == 0) {
            count_0[0] = 1;
            count_1[0] = 0;
        } else if (i == 1) {
            count_0[1] = 0;
            count_1[1] = 1;
        } else {
            count_0[i] = count_0[i - 1] + count_0[i - 2];
            count_1[i] = count_1[i - 1] + count_1[i - 2];
        }
    }
    console.log(`${count_0[n]} ${count_1[n]}`);
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
    // console.log(input.length);

    for (let i = 1; i <= input[0]; i++) {
        fibonacci(input[i]);
    }
}
