const express = require('express');
const router = express.Router();

const {
	allUsers,
	createUser,
	singleUser,
	multiUser,
	deleteUser,
	updateUser,
} = require('../controller/controller');
router.use(express.json());

router.get('/', (req, res) => {
	res.send("Home");
});
router.get('/users', allUsers);


router.get('/users',singleUser );

// post data
router.post('/users', createUser);
router.post('/users', multiUser);
// put data
router.put('/users/:id', updateUser);
// delete data
router.delete('/users/:id', deleteUser);


module.exports = { router };
