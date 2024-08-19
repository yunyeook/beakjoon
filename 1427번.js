solution();

function solution() {
    const fs = require("fs");
    let input = fs
        .readFileSync("/dev/stdin")
        // .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim()
        .split("");
    // console.log(input);

    input.map(Number);
    input.sort(function (a, b) {
        return b - a; //내림차순
    });

    input.toString();
    let result = "";

    for (let i in input) {
        result += input[i];
    }
    console.log(result);

    // let arr = input.map(Number);
}
