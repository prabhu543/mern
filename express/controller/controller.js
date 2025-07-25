const User = require('../model/model');

const allUsers = async (req, res) => {
	try {
		const users = await User.find({});
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

const singleUser = async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findById({ _id: id });

		if (!user) {
			res.status(404).json({ message: 'User not Found!!' });
		}
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
};


const createUser = async (req, res) => {
	try {
		const data = await req.body;
		const user = await User.insertOne(data);
		res.status(200).json(user);
	} catch (error) {
		res.status(304).json(error);
	}
};
const multiUser = async (req, res) => {
	try {
		const data = await req.body;
		if (!data) {
			res.status(304).json({ message: "No data!!!" });
			return;
		}
		const users = await User.insertMany(data);
		res.status(200).json(users)
	} catch (error) {
		res.status(500).json(error)
	}
}

const deleteUser = async (req, res) => {
	const { id } = req.params;
	try {
		const deleteUser = await User.findByIdAndDelete({ _id: id });
		if (!deleteUser) {
			res.status(404).json({ message: 'User not found!!' });
		}
		res.status(200).json(deleteUser);
	} catch (error) {
		res.status(404).json(error);
	}
};

const updateUser = async (req, res) => {
	const { id } = req.params;
	try {
		const data = await req.body;
		const updateUser = await User.findOneAndReplace(
			{ _id: id },
			{ name: data.name, jobRole: data.jobRole }
		);
		if (!updateUser) {
			res.status(404).json({message : "Update failed!!"});
		}
		res.status(200).json(updateUser);
	} catch (error) {
		res.status(500).json(error);
	}
};

module.exports = {
	allUsers,
	createUser,
	singleUser,
	multiUser,
	deleteUser,
	updateUser,
};
