const  input = require('fs').readFileSync('./2.txt', 'utf8');
let  lines = input.split(' ');


function factorial(n){
    if(n === 1){
        return 1
    }else{
       return n *= factorial (n - 1)
    }
}
console.log(factorial(lines));