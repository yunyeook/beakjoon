function NM(N, M) {
    let arrNumber = Array.from({ length: N }, (v, i) => i + 1);

    let visit = Array.from(arrNumber).fill(false);

    let sequence = [];

    function backTracking(depth, startIndex) {
        if (depth === M) {
            let result = "";
            for (let i in sequence) {
                result = `${result} ${sequence[i]}`;
            }

            console.log(result.trim());
        }
        for (let i = startIndex; i < arrNumber.length; i++) {
            if (visit[i]) continue;

            sequence.push(arrNumber[i]);
            visit[i] = true;

            backTracking(depth + 1, i + 1);

            sequence.pop();

            visit[i] = false;
        }
    }
    backTracking(0, 0);
}

solution();

function solution() {
    const fs = require("fs");
    let input = fs
        .readFileSync("/dev/stdin")
        // .readFileSync("/Users/hansol/Projects/yeook/백준/input.txt")
        .toString()
        .trim()
        .split(" ")
        .map(Number);

    //console.log(input);

    NM(input[0], input[1]);
}
