var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split('\n');

function calculateCirclesArea(a, b, c){
    const evrg = ((+a * 2 ) + (b * 3 ) + (c * 5)) / 10
    return console.log(`MEDIA = ${evrg.toFixed(1)}`);
}
calculateCirclesArea(lines[0], lines[1], lines[2]);
