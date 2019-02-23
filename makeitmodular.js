
const mymod = require('./mymodule');
var myfiles = process.argv[2];
var extension = process.argv[3];


mymod(myfiles, extension, function (err, res) {
	if(err) {
		return err;
	}
	res.forEach(function (file) {
		console.log(file);
	});
});
  
