var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split('\n');

function fuelSpent(hours, kmPerHour){
    let totalSpend = hours * kmPerHour / 12
    return console.log(totalSpend.toFixed(3));
}
fuelSpent(lines[0],lines[1]);


