var length = process.argv.length
//console.log(process.argv);
var total = 0;
for (var i = 2; i < length; i++) {
    total = total+ parseFloat(process.argv[i]);
}
console.log(total);