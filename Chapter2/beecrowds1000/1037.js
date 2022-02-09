var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split(' ');

// function intervals(num) {
//     let params = parseFloat(num)
//     console.log(params);
//     if (params <= 0.00 || params >= 100.00) {
//         return console.log('Fora de intervalo');
//     }else if(params >= 0.00 || params <= 25.00){
//         return console.log('Intervalo [0,25]');
//     }else if(params >= 25.00 || params <= 50.00){
//         return console.log('Intervalo [25,50]');
//     }else if(params >= 50.00 || params <= 75.00){
//         return console.log('Intervalo [50,75]');
//     }else if(params >=75.00 || params <= 100.00){
//         return console.log('Intervalo [75,100]');
//     }
// }
// intervals(lines)

var X = parseFloat(input);

if (X>=0 && X<=25.0000){ console.log("Intervalo [0,25]" );

}else if(X >=25.00001 && X <=50.0000000){ console.log("Intervalo (25,50]");

}else if(X >=50.00001 && X<=75.0000000){ console.log("Intervalo (50,75)");

}else if(X>=75.00001 && X<=100.0000000){ console.log("Intervalo (75,100]");

}else{ console.log("Fora de intervalo");

}