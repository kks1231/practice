/*
const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer( function(request, response){
	var pathname = url.parse(request.url).pathname;
	if(pathname == '/'){
		pathname = 'http_exam1.html';
	}

	fs.
}).listen(8080);
console.log('Server Starting!');
*/
var express = require('express');

var app = express();

app.get('/', function(req, res){
	res.send('hi exam1!!!');
}).listen(3000);
