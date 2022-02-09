const  input = require('fs').readFileSync('./2.txt', 'utf8');
let  lines = input.split(' ');

function simpleSort(arg){
    let original = arg.slice()
    arg.sort((a,b) => a - b)
    for (let i = 0; i < arg.length; i++) {
        console.log(arg[i]);
    }
    console.log(' ');
    for (let j = 0; j < original.length; j++) {
        console.log(original[j]);
    }
}
simpleSort(lines)

