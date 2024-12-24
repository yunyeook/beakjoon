function solution() {
    const fs = require('fs');
    let input = fs
        //.readFileSync('/dev/stdin')
        .readFileSync('/Users/hansol/IdeaProjects/yeook/beakjoonJS/input.txt')
        .toString()
        .trim()
        .split('\n');
    let [n, m, k, x] = input[0].split(' ').map(Number)
    let vertices = {}
    for (let i = 1; i <= n; i++) {
        vertices[i] = {adj: []}
    }
    for (let i = 1; i <= m; i++) {
        let [a, b] = input[i].split(' ').map(Number);
        vertices[a].adj.push(b)
    }
    let d = 0//distance
    let visit = new Set();
    let needtovisit = [];
    let needtovisitSet = new Set();
    let result = ''

    needtovisit.push(x)
    let next = []
    while (needtovisit.length > 0) {
        let cur = needtovisit.pop()
        visit.add(cur);
        vertices[cur].adj.forEach(elm => {
            if (!visit.has(elm) && !needtovisitSet.has(elm)) {
                next.push(elm)
                needtovisitSet.add(elm)
            }
        })

        if (needtovisit.length == 0 && next.length > 0) {

            d++
            if (d == k) {
                next.sort((a, b) => {
                    return a - b
                })
                for (let i in next) {
                    if (i != next.length - 1) {
                        result += `${next[i]}\n`
                    } else {
                        result += `${next[i]}`
                    }
                }
                return console.log(result)
            }
            needtovisit = next
            next = []

        }
        if (needtovisit.length == 0 && next.length == 0) {
            return console.log(-1)
        }

    }


}

solution()