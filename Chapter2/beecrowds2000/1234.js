const  input = require('fs').readFileSync('./2.txt', 'utf8');
let  lines = input.split(' ');

let str = 0;
let answer = [];
function out(arg){
    for (const key in arg) {
        if (RegExp(/^\p{L}/,'u').test(key)) {
            if (str % 2 == 0) {
                answer.push(key.toUpperCase())
                str++;
            }else{
                answer.push(key.toLowerCase())
                str++;
            }
        }else{
            answer.push(key)
        }
    }
    return answer.toString()
}
console.log(out(lines));