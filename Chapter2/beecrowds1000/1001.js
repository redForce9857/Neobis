var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split('\n');


function foo(a, b){
return console.log(`PROD = ${+a *  +b}`);
}
foo(lines[0], lines[1]);


// https://github.com/malbolgee/URI/blob/master/1042.c