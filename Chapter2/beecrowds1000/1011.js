var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split('\n');

function calculateCirclesArea(R){
    const pi = 3.14159;
    const VOLUME = (4/3) * pi * R **3
    return console.log(`VOLUME = ${VOLUME.toFixed(2)}`);
}
calculateCirclesArea(lines[0]);
