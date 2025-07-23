const { logger } = require('./index.js');

const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // setup ejs here =>

app.use('/',logger); //  to all

app.get('/', (req, res) => {
	res.send('home page');
});

// app.get('/', (req, res) => {
// 	const name = 'Prabhu';
// 	res.render('index', { name }); // rendering the index.html
// });

app.get('/about', (req, res) => {
	const name = 'about page';
	res.render('index', { name });
});

app.get('/:id', (req, res) => {
	const name = req.params.id;
	res.render('index', { name });
});

app.listen(3000, () => {
	console.log('server is running at port 3000');
});

// app.get('/about', (req, res) => {
// 	res.send('this is about page');
// });

// app.get('/{*Any}', (req, res) => {
// 	res.send('page not found');
// 	console.log(req.method);
// });
// app.get('/:id', (req, res) => {
//   res.send(`page at ${req.params.id}`)
// })
