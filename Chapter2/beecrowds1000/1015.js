var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split('\n');
let lines1 = lines[0].split(" ")
let lines2 = lines[1].split(" ")

function calculateAreas(x1,y1,x2,y2){
    let X1 = parseFloat(x1)
    let Y1 = parseFloat(y1)
    let X2 = parseFloat(x2)
    let Y2 = parseFloat(y2)
    let result  = Math.sqrt(((X2-X1)**2 + (Y2-Y1)**2))
    return console.log(result.toFixed(4));
}
calculateAreas(lines1[0],lines1[1],lines2[0],lines2[1]);
