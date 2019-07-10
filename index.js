const http = require('http')
const fs = require('fs');
const formidable = require('formidable');
const im = require('imagemagick');
const port = 1337

const requestHandler = (request, response) => {
	if (request.url == '/fileupload') {
    	var form = new formidable.IncomingForm();
    	form.parse(request, function (err, fields, files) {
    		if(files.filetoupload.name.split('.').pop() !== "png") {
    			console.log(files.filetoupload.name.split('.').pop())
    			response.write("Only .png files are allowed!")
				response.end();
    		} else {
		      	var oldpath = files.filetoupload.path;
		      	var newpath = './' + files.filetoupload.name;
		      	fs.rename(oldpath, newpath, function (err) {
		        	var thumbnail_name = files.filetoupload.name.split('.').slice(0, -1).join('.')
		        	thumbnail_name = thumbnail_name + '_thumb.png'
		        	// The following line includes the vulnerability: im.resize() guesses the mime type
					im.resize({srcPath: files.filetoupload.name, dstPath: './'+thumbnail_name, width: 256 }, function(err, stdout, stderr){
	  					if (err) throw err;
	  					response.writeHead(200, {'Content-Type': 'text/html'});
		        		response.write('File uploaded and moved!');
		        		response.write(" You can access your upload <a href=\"/" + files.filetoupload.name + "\" target=\"_blank\">here</a>.")
	  					response.write(" Thumbnail: <a href=\"/" + thumbnail_name + "\" target=\"_blank\">thumb</a>.")
						response.end();
					});
		     	});
	      	}
    });
  } else if(request.url == '/'){
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    response.write('<input type="file" name="filetoupload"><br>');
    response.write('<input type="submit">');
    response.write('</form>');
    return response.end();
  } else {
  	// Caution: Enables LFI, quick and dirty implementation for this PoC
  	var out = fs.readFileSync('.' + request.url);
    response.writeHead(200, {'Content-Type': 'image/png' });
    response.end(out, 'binary');
  }
}

const server = http.createServer(requestHandler)
server.listen(port, (err) => {
  	if (err) return console.log('something bad happened', err)
  	console.log(`server is listening on ${port}`)
})