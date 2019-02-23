const fs = require('fs');
var myfile = process.argv[2];

var filecontent = fs.readFile(myfile, 'utf-8', function(err, data){
	if(err) {
		console.log(error);
	}
	//console.log(data);
	var total = data.split('\n')
    .length-1;
	console.log(total);
});