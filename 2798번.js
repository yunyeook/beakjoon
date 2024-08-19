//2798번 블랙잭
// let input = readFileSync("/dev/stdin").toString().split("\n");

solution();

function solution() {
    let input = require("fs")
        .readFileSync("/dev/stdin")
        // .readFileSync(__dirname + "/input.txt")
        .toString()
        .trim()
        .split("\n");
    // console.log(input);

    // 첫 번째 줄이 "a b" 처럼 띄워쓰기로 분리된 경우,
    // a를 num, b를 max에 저장
    const [num, max] = input[0].split(" ").map(Number);
    // [10, 500];
    // const [a, b] = [1, 2];

    // 첫번 째 줄을 제외한 나머지 요소들을 짜르고, 공백 단위로 분리해 숫자 배열로 만듬
    const arr = input.slice(1).toString().trim().split(" ").map(Number);
    // console.log(num);
    // console.log(max);
    // console.log(arr);
    console.log(blackjack(max, arr));
}

function blackjack(max, arr) {
    let tmpMax = 0;
    let tmpNum = [];
    let tmpArr1 = [];
    let tmpArr2 = [];
    // for (let i = 0; i < arr.length - 2; i++) {
    //     for (let j = i + 1; j < arr.length - 1; j++) {
    //         for (let k = j + 1; k < arr.length; k++) {
    //             // if (i === j || j === k || i === k) continue;
    //             let sum = arr[i] + arr[j] + arr[k];
    //             if (sum >= tmpMax && sum <= max) {
    //                 tmpMax = sum;
    //             }
    //         }
    //     }
    // }
    for (let i = 0; i < arr.length; i++) {
        tmpArr1 = [...arr];
        tmpArr1.splice(i, 1);
        for (let j = 0; j < tmpArr1.length; j++) {
            tmpArr2 = [...tmpArr1];
            tmpArr2.splice(j, 1);
            for (let k = 0; k < tmpArr2.length; k++) {
                if (arr[i] + tmpArr1[j] + tmpArr2[k] >= tmpMax && arr[i] + tmpArr1[j] + tmpArr2[k] <= max) {
                    tmpMax = arr[i] + tmpArr1[j] + tmpArr2[k];
                    tmpNum = [];
                    tmpNum.push(arr[i], tmpArr1[j], tmpArr2[k]);
                }
            }
        }
    }
    // console.log("최대 숫자 = " + tmpMax);
    // console.log("숫자 조합 = " + tmpNum);
    return tmpMax;
}
