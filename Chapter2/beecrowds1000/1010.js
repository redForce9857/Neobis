var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split('\n');

function calc(line){
    let [price1, number1,code1] = line.shift().split(" ");
    let [price2, number2,code2] = line.shift().split(" ");
    let result1 = number1 * code1;
    let result2 = number2 * code2;
    let result = result1 + result2
    return console.log(`VALOR A PAGAR: R$ ${result.toFixed(2)}`);
}
calc(lines);



