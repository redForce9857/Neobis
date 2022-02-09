const  input = require('fs').readFileSync('./2.txt', 'utf8');
let  lines = input.split('');

function out(arg){
    let i = arg.length/2
    let oneSide = arg.slice(0, i)
    let finalOneSide = oneSide.reverse()
    let secondSide = arg.slice(i+1, arg.length)
    let finalSecondSide = secondSide.reverse()
    let str = [...finalOneSide, ...finalSecondSide]
    return str.toString().split(',').join(' ')
}
console.log(out(lines));


