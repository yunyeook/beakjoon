function NM(N, M) {
    function dfs(depth, selected) {
        if (selected.length === M) {
            let result = "";
            for (let i in selected) {
                result = result + " " + selected[i];
            }
            console.log(result.trim());
            return;
        }
        if (depth === N) {
            return;
        }

        dfs(depth + 1, [...selected, depth + 1]);
        dfs(depth + 1, [...selected]);
    }
    dfs(0, []);
}

solution();

function solution() {
    const fs = require("fs");
    let input = fs
        //.readFileSync("/dev/stdin")
        .readFileSync("/Users/hansol/Projects/yeook/백준/input.txt")
        .toString()
        .trim()
        .split(" ")
        .map(Number);

    NM(input[0], input[1]);
}
