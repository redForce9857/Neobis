const  input = require('fs').readFileSync('./2.txt', 'utf8');
let  lines = input.split(' ');

function fit(arg){
    let [a,b] = arg
    let bLenth = b.length
    let aTail = Array.from(a);
    let s = aTail.slice(-bLenth);
    if (s != bLenth) {
        return console.log('nao encaixa');
    }else{
        return console.log('encaixa');
    }
}
fit(lines);