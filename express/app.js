const express = require('express');

const app = express();

const { router } = require('./routes/route');

app.use('/api', router);

require('./connect/connect');
require('dotenv').config();

const {connectDB} = require('./connect/connect');

const start = async () => {
	try {
		await connectDB(process.env.MONGODB_URI);
		app.listen(5000, () => {
			console.log('server is working at post 5000');
		});
	} catch (error) {
		console.log('error : ', error);
	}
};

start();