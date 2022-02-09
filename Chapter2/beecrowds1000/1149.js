var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split('\n');

// function FinalBoss(params) {
//     let [a,n] = params.shift().split(" ").filter(e =>  e > 0)
//     let A = +a;
//     let N = +n;
//     let sumsOfn = 0;
//     // console.log(N);
//     for (let i = 0; i < N; i++) {
//         sumsOfn += N
//     }
//     return console.log(sumsOfn + A);
// }
// FinalBoss(lines);


function FinalBoss(params) {
    let [a,n] = params.shift().split(" ").filter(item => item > 0);
    let A = +a;
    let N = +n;
    let sumA = 0,w
    sumB = 0;
    // console.log(N);
    for (let i = 1; i <= A; i++) {
        if(i == +N) {
            sumB += i
            continue;
        } 
        if (i < +N) {
            sumB += i
        }
        sumA += i
    }
    return console.log(sumB + sumA);
}
FinalBoss(lines);