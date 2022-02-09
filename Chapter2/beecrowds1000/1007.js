var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split('\n');

function calc(A,B,C,D){
    return console.log(`DIFERENCA = ${(A * B - C * D)}`);
}
calc(lines[0],lines[1],lines[2],lines[3]);