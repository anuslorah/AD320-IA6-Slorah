const http = require ('http');
let myurl = process.argv[2];

http.get(myurl, function(res) {
	res.setEncoding('utf8');
	res.on('data', console.log);
	res.on('error', console.error);
	//res.end();
});
  	



//const authHeader = req.get('Authorization');
 // console.log(authHeader);
//
//
//content-length': '123',
//  'content-type': 'text/plain',
//  'connection': 'keep-alive',
//  'host': 'mysite.com',
//  'accept': '*/*' 