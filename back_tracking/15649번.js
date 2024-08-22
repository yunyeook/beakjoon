function NM(N, M) {
    let arrNumber = Array.from({ length: N }, (v, i) => i + 1);

    let visit = Array.from(arrNumber).fill(false);

    let sequence = [];

    function backTracking(depth) {
        if (depth === M) {
            let result = "";
            for (let i in sequence) {
                result = `${result} ${sequence[i]}`;
            }

            console.log(result.trim());
        }
        for (let i = 0; i < arrNumber.length; i++) {
            // 같은 깊이의 옆형제를 돈다.
            if (visit[i]) continue; //밑의 코드 실행 안하고 다음 i++되어 다음으로 넘아간다

            //방문 안한 숫자라면
            sequence.push(arrNumber[i]); // 현재 숫자 넣기
            visit[i] = true; //현재숫자 방문 확인

            backTracking(depth + 1); //다음 깊이로 들어가고 깊이만큼 도달했으면 출력함.

            sequence.pop(); //

            visit[i] = false;
            /* 자식들 다 호출되면 이제 부모로 감 
            => 부모도 같은 깊이의 다른 형제(부모가 바뀜)로 옮겨서 다시 실행됨
            이때 visit에 등록되어있으면 부모만 제외시킨게 아니므로 자식들을 돌수없으니까 
            */
        }
    }
    backTracking(0);
}
//부모 : 호출한곳
//자식 : 호출받은곳
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

    //console.log(input);

    NM(input[0], input[1]);
}
