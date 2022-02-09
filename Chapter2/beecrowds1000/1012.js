var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split('\n');

function calculateAreas(line){
    const pi = 3.14159;
    [a,b,c] = line.shift().split(' ')
    let triangle = (1/2) * a *c
    let circle = (c **2) * pi
    let trapezium = (+a + +b) / 2 * c
    let square = b **2
    let rectangle = a*b
    return console.log(`TRIANGULO: ${triangle.toFixed(3)}\nCIRCULO: ${circle.toFixed(3)}\nTRAPEZIO: ${trapezium.toFixed(3)}\nQUADRADO: ${square.toFixed(3)}\nRETANGULO: ${rectangle.toFixed(3)}`);
}
calculateAreas(lines);
