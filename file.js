// var fileSelector=require('fs')

// const input=process.argv

// if(input[2]=='add')
// {
//     fileSelector.writeFileSync(input[3],input[4])
// }
// else if(input[2]=='remove')
// {
//     fileSelector.unlinkSync(input[3])
// }
// else
// {
//     console.log("invalid")
// }

var fs =  require('fs');
var content= "this is the content in the file";
fs.writeFile('sample-write.txt', content , (err) => {
	console.log('File saved!');
});

fs.writeFile('content.txt', content , (err) => {
	console.log('File saved!');
});

new_data = " add me at the end of the file with Async.";
fs.appendFile('sample-write.txt', new_data , (err) => {
	console.log('Append success');
});

fs.rename('sample-write.txt', 'new_name.txt', (err) => {
	console.log('Renamed successfully');
});

var filename = 'content.txt';
fs.unlink(filename, (err) => {
	console.log('File deleted ...');
});
