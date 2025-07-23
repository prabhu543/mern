const express = require('express');

const app = express();

const { router } = require('./routes/route');

app.use(router);

app.listen(5000, () => {
	console.log('server is working at post 5000');
});
