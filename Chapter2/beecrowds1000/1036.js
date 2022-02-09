var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split(' ');

let a = +lines[0],
b = +lines[1],
c = +lines[2],
d = Math.pow(b, 2) - 4 * a * c;
if(a === 0 || d < 0){
    console.log('Impossivel calcular')}
    else{
        console.log(`R1 = ${((-b + Math.sqrt(d)) / (2 * a)).toFixed(5)} \nR2 = ${((-b - Math.sqrt(d)) / (2 * a)).toFixed(5)}`)
    }