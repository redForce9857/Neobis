const  input = require('fs').readFileSync('./2.txt', 'utf8');
let  lines = input.split(' ');


let fib = [0, 1];
for(let i = fib.length; i<lines; i++) {
    fib[i] = fib[i-2] + fib[i-1];
}
let flattened = fib.toString().split(",").join(" ");
console.log(flattened);