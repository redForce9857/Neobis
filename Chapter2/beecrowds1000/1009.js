var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split('\n');

function calc(fixSalary, totalSales){
    let Salary = +fixSalary + +totalSales * 15 / 100
    return console.log(`TOTAL = R$ ${Salary.toFixed(2)}`);
}
calc(lines[1],lines[2]);

// console.log(`TOTAL = R$ ${(+lines[1] + (+lines[2] * 15 / 100)).toFixed(2)}`)