var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split(' ');


function calculateAreas(arr){
    let [a, b, c, d] = arr.shift().split(" ")
    let A = parseInt(a)
    let B = parseInt(b)
    let C = parseInt(c)
    let D = parseInt(d)
    let sumCD = C + D;
    let sumAB = A + B
    if (B > C && D > A) {
        if (sumCD > sumAB) {
            if (C > 0 && D > 0) {
                if (A % 2 == 0) {
                    return console.log('Valores aceitos');
                }
            }
        }
    }else{
    return console.log('Valores nao aceitos');
    }
}
calculateAreas(lines);
