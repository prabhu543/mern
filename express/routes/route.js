const express = require('express');
const router = express.Router();

const { users } = require('./data');
router.use(express.json());

router.get('/', (req, res) => {
	res.send("Home");
});
router.get('/api/users', (req, res) => {
	res.json(users);
});

router.get('/api/users/:id', (req, res) => {
	const { id } = req.params;
	const user = users.find((i) => i.id === id);
	if (user) {
		res.json(user);
	} else {
		res.status(404).json({ message: 'User not found!!!' });
	}
});

// post data
router.post('/api/users', (req, res) => {
	const { id, name, jobRole } = req.body;
	const newUser = { id, name, jobRole };
	users.push(newUser);
	res.json(users);
});
// put data
router.put('/api/users/:id', (req, res) => {
	const { id } = req.params;
	const user = users.find((u) => u.id === id);
	user.name = 'Lekhan Raj';
	user.jobRole = 'coordinator';
	res.json(user);
});
// delete data
router.delete('/api/users/:id', (req, res) => {
	const { id } = req.params;
	// const remainedUsers = users.filter(u => u.id !== id);
	const index = users.findIndex((u) => u.id === id);
	if (!index) {
		res.json({ message: 'user not found' });
		return;
	} else {
		users.splice(index, 1);
		res.json(users);
	}
});


module.exports = { router };
