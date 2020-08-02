var fs = require('fs');

console.log("Begin reading file");

fs.readFile("input.txt", (err,data) => {
	if (err) throw err;
		console.log(data.toString());
		console.log("End reading file");
		fs.appendFile('input.txt','I am appending a file for async', (err)=> {
			if (err) throw err; 
				console.log('End appending file');
				console.log('Begin re-reading file');

				fs.readFile("input.txt", (err,data) => {
				if (err) throw err;
					console.log(data.toString());
					console.log("Finish re-reading file");
			});
		});		
	});








