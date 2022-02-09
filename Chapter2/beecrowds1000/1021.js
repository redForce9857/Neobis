var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split('\n');

// function banknoteCount(num) { 
//     let banknotesArr = [100, 50, 20, 10, 5, 2, 1];
//     let resArr = []
//     for (let i = 0; i < banknotesArr.length; i++) {
//       resArr.push(Math.floor(num / banknotesArr[i]));
//       num = num % banknotesArr[i];
//     }

//     let coinArr = [1,0.50, 0.25, 0.10, 0.05, 0.01];
//     let cosArr = []
//     for (let i = 0; i < coinArr.length; i++) {
//       cosArr.push(Math.floor(num / coinArr[i]));
//       num = num % coinArr[i];
//     }
//     return console.log(`NOTAS:\n${resArr[0]} nota(s) de R$ 100,00\n${resArr[1]} nota(s) de R$ 50,00\n${resArr[2]} nota(s) de R$ 20,00\n${resArr[3]} nota(s) de R$ 10,00\n${resArr[4]} nota(s) de R$ 5,00\n${resArr[5]} nota(s) de R$ 2,00\nMOEDAS:\n${coinArr[0]} moeda(s) de R$ 1.00\n${coinArr[1]} moeda(s) de R$ 0.50\n${coinArr[2]} moeda(s) de R$ 0.25\n${coinArr[3]} moeda(s) de R$ 0.10\n${coinArr[4]} moeda(s) de R$ 0.05\n${coinArr[5]} moeda(s) de R$ 0.01`);
// };

// banknoteCount(parseInt(lines[0]))

   
// var a = parseInt(lines.shift());
// console.log('NOTAS:');
// console.log(parseInt(a/100) + ' nota(s) de R$ 100,00');
// a -= parseInt(a/100)*100;
// console.log(parseInt(a/50) + ' nota(s) de R$ 50,00');
// a -= parseInt(a/50)*50;
// console.log(parseInt(a/20) + ' nota(s) de R$ 20,00');
// a -= parseInt(a/20)*20;
// console.log(parseInt(a/10) + ' nota(s) de R$ 10,00');
// a -= parseInt(a/10)*10;
// console.log(parseInt(a/5) + ' nota(s) de R$ 5,00');
// a -= parseInt(a/5)*5;
// console.log(parseInt(a/2) + ' nota(s) de R$ 2,00');
// // a -= parseInt(a/2)*2;
// // console.log(parseInt(a/1) + ' nota(s) de R$ 1,00');
// console.log('MOEDAS:');
// a -= parseInt(a/2)*2;
// console.log(parseInt(a/1) + ' moeda(s) de R$ 1.00');
// a -= parseInt(a/2)*2;
// console.log(parseInt(a/1) + ' nota(s) de R$ 0.50');
// a -= parseInt(a/2)*2;
// console.log(parseInt(a/2) + ' nota(s) de R$ 0.25');
// a -= parseInt(a/2)*2;
// console.log(parseInt(a/2) + ' nota(s) de R$ 0.10');
// a -= parseInt(a/2)*2;
// console.log(parseInt(a/2) + ' nota(s) de R$ 0.05');
// a -= parseInt(a/2)*2;
// console.log(parseInt(a/2) + ' nota(s) de R$ 0.01');


let x = parseFloat(input);

let notas100 = 0.00;
let notas50 = 0.00;
let notas20 = 0.00;
let notas10 = 0.00;
let notas5 = 0.00;
let notas2 = 0.00;

let moedas1 = 0.00;
let moedas050 = 0.00;
let moedas025 = 0.00;
let moedas010 = 0.00;
let moedas005 = 0.00;
let moedas001 = 0.00;

for (x.toFixed(2); x.toFixed(2) >= 100; x = x - 100) notas100++;
for (x.toFixed(2); x.toFixed(2) >= 50; x = x - 50) notas50++;
for (x.toFixed(2); x.toFixed(2) >= 20; x = x - 20) notas20++;
for (x.toFixed(2); x.toFixed(2) >= 10; x = x - 10) notas10++;
for (x.toFixed(2); x.toFixed(2) >= 5; x = x - 5) notas5++;
for (x.toFixed(2); x.toFixed(2)>= 2; x = x - 2) notas2++;

for (x.toFixed(2); x.toFixed(2) >= 1; x = x - 1) moedas1++;
for (x.toFixed(2); x.toFixed(2) >= 0.50; x = x - 0.50) moedas050++;
for (x.toFixed(2); x.toFixed(2) >= 0.25; x = x - 0.25) moedas025++;
for (x.toFixed(2); x.toFixed(2) >= 0.10; x = x - 0.10) moedas010++;
for (x.toFixed(2); x.toFixed(2) >= 0.05; x = x - 0.05) moedas005++;
for (x.toFixed(2); x.toFixed(2) >= 0.01; x = x - 0.01) moedas001++;

console.log('NOTAS:');
console.log(`${notas100} nota(s) de R$ 100.00`);
console.log(`${notas50} nota(s) de R$ 50.00`);
console.log(`${notas20} nota(s) de R$ 20.00`);
console.log(`${notas10} nota(s) de R$ 10.00`);
console.log(`${notas5} nota(s) de R$ 5.00`);
console.log(`${notas2} nota(s) de R$ 2.00`);

console.log('MOEDAS:');
console.log(`${moedas1} moeda(s) de R$ 1.00`);
console.log(`${moedas050} moeda(s) de R$ 0.50`);
console.log(`${moedas025} moeda(s) de R$ 0.25`);
console.log(`${moedas010} moeda(s) de R$ 0.10`);
console.log(`${moedas005} moeda(s) de R$ 0.05`);
console.log(`${moedas001} moeda(s) de R$ 0.01`);