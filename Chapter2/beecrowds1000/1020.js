var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split('\n');

// function fuelSpent(days){
//     let years = days % 365
//     let months = years / 12
//     let day = months / 30
//     return console.log(`${years} ano(s)\n ${months} mes(es)\n ${day}dia(s)`);
// }
// fuelSpent(lines[0]);
function getFormatedStringFromDays(numberOfDays) {
    var years = Math.floor(numberOfDays / 365);
    var months = Math.floor(numberOfDays % 365 / 30);
    var days = Math.floor(numberOfDays % 365 % 30);
    return console.log(`${years} ano(s)\n${months} mes(es)\n${days} dia(s)`);
}
getFormatedStringFromDays(lines[0]);