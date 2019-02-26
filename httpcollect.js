const http = require ('http');
let myurl = process.argv[2];
var datastring = "";

http.get(myurl, function(res) {
	res.setEncoding('utf8');
	res.on('data', function(data){
		datastring+=data;
	});
	res.on('end', function() {
		console.log(datastring.length);
		console.log(datastring);
	});
	res.on('error', console.error);
	//res.end();
});