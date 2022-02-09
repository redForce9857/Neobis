var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split('\n');

function calculateAreas(arr){
    let [a, b, c] = arr.shift().split(" ")
    let A = parseInt(a)
    let B = parseInt(b)
    let C = parseInt(c)
    let result = [A,B,C]
    let max = Math.max(...result)
    return console.log(`${max} eh o maior`);
}
calculateAreas(lines);
