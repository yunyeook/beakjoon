solution();

function solution() {
    const fs = require("fs");
    let input = fs
        //.readFileSync("/dev/stdin")
        .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim()
        .split("\n")
        .map(x => x.split(" ").map(Number));
    input.shift();
    // console.log(input);
    let hashtable = {};
    for (let i in input) {
        bridge(input[i][0], input[i][1], hashtable);
    }
}
//0<n<=m<30;
function bridge(n, m, hashtable) {
    hashtable[0] = 1;
    for (let i = 1; i <= m; i++) {
        if (hashtable[i] != null) {
            continue;
        } else {
            hashtable[i] = hashtable[i - 1] * i;
        }
    }
    let result = hashtable[m] / (hashtable[n] * hashtable[m - n]);
    console.log(Number(Math.round(result)));
}
