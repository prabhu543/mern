// const { readFileSync } = require('fs');
// const http = require('http');

// const server = http.createServer((req, res) => {
// 	if (req.url === '/') {
// 		const index = readFileSync('./index.html', 'utf-8');
// 		res.writeHead(200, { 'Content-Type': 'text/html' });
// 		res.end(index);
// 	} else {
// 		const NotFound = readFileSync('./NotFound.html' , 'utf-8');
// 		res.writeHead(404, { 'Content-Type': 'text/html' });
// 		res.end(NotFound);
// 	}
// });

// server.listen(3000, () => {
// 	console.log('Server is running at port 5000');
// });


const { readFileSync, writeFileSync } = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		const index = readFileSync('./index.html', 'utf-8')
		res.writeHead(200, { 'Content-Type': 'text/html' })
		res.end(index)
	} else {
		const NotFound = readFileSync('./NotFound.html', 'utf-8');
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(NotFound);
	}
})

server.listen(3000, () => {
	console.log('server is connecting at port at 3000');
})