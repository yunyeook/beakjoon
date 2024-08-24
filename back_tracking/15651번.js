function NM3(N, M) {
    let selected = [];
    let result = "";
    function dfs(depth) {
        if (depth == M) {
            result += `${selected.join(" ")}\n`;

            return;
        }
        for (let i = 1; i <= N; i++) {
            selected.push(i);
            dfs(depth + 1);
            selected.pop();
        }
    }
    dfs(0);
    console.log(result.trim());
}

solution();

function solution() {
    const fs = require("fs");
    let input = fs
        // .readFileSync("/dev/stdin")
        .readFileSync("/Users/hansol/Projects/yeook/백준/input.txt")
        .toString()
        .trim()
        .split(" ")
        .map(Number);

    //console.log(input);

    NM3(input[0], input[1]);
}
