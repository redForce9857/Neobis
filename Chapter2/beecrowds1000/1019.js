var input = require('fs').readFileSync('./1.txt', 'utf8');
var lines = input.split('\n');

function fancyTimeFormat(duration){
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    // if (hrs > 0) {
    //     ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    // }

    ret += hrs + ":" + "" + mins + ":" + secs;
    return ret;
}
console.log(fancyTimeFormat(parseInt(lines[0])));
// banknoteCount(parseInt(lines[0]))
