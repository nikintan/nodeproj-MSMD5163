var fs = require('fs');

fs.readFile("input.txt", (err,data) => {
	if (err) throw err;
		console.log(data.toString());
	});

console.log("Begin reading file");
console.log("End reading file")

fs.appendFile('input.txt','I am appending a file for async', (err)=> {
	if (err) throw err; 
	console.log('End appending file');
	console.log('Begin re-reading file');
});

var anotherData = fs.readFile("input.txt", (err,data)=> {
	if (err) throw err;
		console.log(anotherData);
		console.log("Finish re-reading file");
});

