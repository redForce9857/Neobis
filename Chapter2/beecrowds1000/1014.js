var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split('\n');

function carAverage(totalKm, totalSpeededFuel){
    let carAverageConsumption = totalKm / totalSpeededFuel
    return console.log(`${carAverageConsumption.toFixed(3)} km/l`);
}
carAverage(lines[0],lines[1]);
