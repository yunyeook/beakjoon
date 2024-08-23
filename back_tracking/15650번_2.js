function NM(N, M) {
    let arrNumber = Array.from({ length: N }, (v, i) => i + 1);
    let visit = Array.from(arrNumber).fill(false);
    let sequence = [];
    let compare = {};

    function backTracking(depth) {
        if (depth === M) {
            let copySequenceSort = [...sequence].sort();
            if (!compare[copySequenceSort]) {
                compare[copySequenceSort] = true;
                let result = "";
                for (let i in copySequenceSort) {
                    result = result + " " + copySequenceSort[i];
                }
                console.log(result.trim());
            }
        }
        for (let i = 0; i < arrNumber.length; i++) {
            if (visit[i]) continue;

            sequence.push(arrNumber[i]);
            visit[i] = true;

            backTracking(depth + 1);

            sequence.pop();
            visit[i] = false;
        }
    }
    backTracking(0);
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
