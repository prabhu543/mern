// http protocols
// server is being created here ...
const http = require('http');

const server = http.createServer((req, res) => {
	// diff routes
	if (req.url === '/') {
		res.write('welcome to node js home page');
		res.end();
	} else if (req.url === '/about') {
		res.write('welcome to node js about page');
		res.end();
	}
  // to say 
  res.writeHead(200, {'content-type' : 'text/plain'});
  res.write('<h2>hello world</h2>')
  res.end();
});

server.listen(5000, () => {
  console.log("server is running on port 5000") // indicates that this server is working.
});
