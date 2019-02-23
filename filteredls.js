const fs = require('fs');
const path = require('path');

var myfiles = process.argv[2];
var extension = "." + process.argv[3];

fs.readdir(myfiles, function(err, files) {
	if(err) { return console.log(error);}
		files.forEach(function(file) {
		if (path.extname(file) === extension){
			console.log(file);
		}
	});
});	




	//targetFiles = files.filter(files => path.extname = extension);
	//console.log(targetFiles);
	//console.log(files);
//	files.forEach(function (file, index) {
//	if (path.extname === extension){
//		console.log(file);
//	}});
//	});



//
//const Filehound = require('filehound');
//
//Filehound.create()
//  .ext('html')
//  .paths("/tmp")
//  .find((err, htmlFiles) => {
//    if (err) return console.error("handle err", err);
//
//    console.log(htmlFiles);
//});



//var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
//
//const result = words.filter(word => word.length > 6);
//
//console.log(result);


//		   
//files = fs.readdir(path, function(err, data){
//	if(err) {
//		console.log(error);
//	}
//	var targetFiles = data.filter(function(file) {
//    	return path.extname === extension;
//	});
//	console.log(targetFiles);
//
//});



//var fs = require('fs');
//var path = require('path');
//var dirPath = path.resolve(__dirname); // path to your directory goes here
//var filesList;
//fs.readdir(dirPath, function(err, files){
//  filesList = files.filter(function(e){
//    return path.extname(e).toLowerCase() === '.txt'
//  });
//  console.log(filesList);
//});