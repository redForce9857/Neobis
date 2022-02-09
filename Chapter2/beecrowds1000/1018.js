var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split('\n');


function banknoteCount(num) {
    let original = num; 
    let banknotesArr = [100, 50, 20, 10, 5, 2, 1];
    let resArr = []
    for (let i = 0; i < banknotesArr.length; i++) {
      resArr.push(Math.floor(num / banknotesArr[i]));
      num = num % banknotesArr[i];
    }
    return console.log(`${original}\n${resArr[0]} nota(s) de R$ 100,00\n${resArr[1]} nota(s) de R$ 100,00\n${resArr[2]} nota(s) de R$ 100,00\n${resArr[3]} nota(s) de R$ 100,00\n${resArr[4]} nota(s) de R$ 100,00\n${resArr[5]} nota(s) de R$ 100,00\n${resArr[6]} nota(s) de R$ 100,00`);
};

banknoteCount(parseInt(lines[0]))
