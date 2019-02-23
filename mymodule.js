const fs = require('fs');
const path = require('path');

module.exports = function readf (myfiles, extension, callback) {
	
	fs.readdir(myfiles, function (err, files) {
		if(err) { 
			return callback(err);
		}
		files = files.filter(function (file) {
		
			return path.extname(file) === '.' + extension;
			
		});
		callback(null, files);
	});
}
