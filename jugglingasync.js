const http = require ('http');
let urls = process.argv.slice(2);
let results = [];

urls.forEach(getthedata);
printResult();

function printResult() {
  for (let i = 0; i < results.length; i++) {
	  console.log(results[i]);
  }
}
function getthedata(url, index) {
	http.get(url, function(res){
		let datastring = '';
		res.setEncoding('utf8');
		res.on('data', function(data) {
			datastring+= data;
		});
		res.on('end', function() {
			results[index] = datastring;
			//console.log(results[index]);
		});
			//res.end;
	});
}	



//not asyncronous
//for (let i = 0; i < 3; i++) {
//	http.get(urls[i], function(res) {
//		res.setEncoding('utf8');
//		res.on('data', function(data){
//			datastring+=data;
//		});
//		res.on('end', function() {
//			//console.log(datastring.length);
//			console.log(datastring);
//			datastring = "";
//		});
//	});
//}