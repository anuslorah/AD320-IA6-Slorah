const fs = require('fs');
const args = process.argv[2];

var lines = fs.readFileSync(args, 'utf-8')
    .split('\n')
    .filter(Boolean);
//var total = 0;
//for (var i = 0; i < lines.length-1; i++) {
//    total ++;
//}
var total = lines.length-1;
console.log(total);