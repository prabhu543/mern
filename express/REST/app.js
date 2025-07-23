const express = require('express');
const app = express();

// app.use(express.json()); // middleware

const { users } = require('./data');

app.get('/', (req, res) => {
	res.send('Home');
});

app.get('/api/users', (req, res) => {
	res.json(users);
});

app.get('/api/users/:id', (req, res) => {
	const { id } = req.params;
	const user = users.find((i) => i.id === id);
	if (user) {
		res.json(user);
	} else {
		res.status(404).json({ message: 'User not found!!!' });
	}
});

// post data
app.post('/api/users', (req, res) => {
	const { id, name, jobRole } = req.body;
	const newUser = { id, name, jobRole };
	users.push(newUser);
	res.json(users);
});
// put data
app.put('/api/users/:id', (req, res) => {
	const { id } = req.params;
	const user = users.find((u) => u.id === id);
	user.name = 'Lekhan Raj';
	user.jobRole = 'coordinator';
	res.json(user);
});
// delete data
app.delete('/api/users/:id', (req, res) => {
	const { id } = req.params;
	// const remainedUsers = users.filter(u => u.id !== id);
	const index = users.findIndex((u) => u.id === id);
  if (!index) {
    res.json({message : 'user not found'})
  } else {
    users.splice(index, 1);
		res.json(users);
  }
});

app.listen(5000, () => {
	console.log('server is running ');
});
