let net = require('net');
let port = process.argv[2];

function zeroFill(i) {  
	return (i < 10 ? '0' : '') + i;  
} 

let server = net.createServer(function (socket) {  
	 let date = new Date();
	
	let year = date.getFullYear();  
	let month = zeroFill(date.getMonth()+1); //starts at 0 
	let day = zeroFill(date.getDate()); //day of month  
	let hours = zeroFill(date.getHours());  
	let minutes = zeroFill(date.getMinutes());
	let time = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
	
	socket.end(time + '\n');
	//socket.pipe(socket);
 });  

 server.listen(port);