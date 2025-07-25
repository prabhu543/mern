const mongoose = require('mongoose');

const connectDB = async (url) => {
	return (
		mongoose
			.connect(url)
			// if connected then good else go for catch
			.then(() => {
				console.log('connected!!');
			})
			.catch((error) => {
				console.log('error : ', error);
			})
	);
};

module.exports = { connectDB };
