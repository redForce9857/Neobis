var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split('\n');

function calculateAreas(speed){
    let doubleSpeed  =  speed * 2
    return console.log(`${doubleSpeed} minutos`);
}
calculateAreas(lines[0]);


