var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split('\n');

function calc(numbersOfEmployee, perHour, hours){
    let calculation = perHour * hours
    return console.log(`NUMBER = ${numbersOfEmployee}\nSALARY = U$ ${calculation.toFixed(2)}`);
}
calc(lines[0],lines[1],lines[2]);

// console.log(`TOTAL = R$ ${(+lines[1] + (+lines[2] * 15 / 100)).toFixed(2)}`)