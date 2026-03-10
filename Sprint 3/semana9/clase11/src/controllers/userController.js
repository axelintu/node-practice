import User from "../model/User.js";

export const getUsers = async (req, res) => {
	const users = await User.find.findAll();
	res.json(users);
}

export const getUserById = async (req, res) => {
	const user = await User.findByPk(req.params.id);
	if(!user) return res.status(404).json({ error: "User not found"});
	res.json(user);
}

export const createUser = async (req, res) => {
	const { name, age, address, authorId } = req.body;
	if (!name) return 
		res
		.status(404)
		.json({ error: "The name of the user is required"});

	const user = await User.create({ name, age, address, authorId });
		res.status(201).json({ message: "User created", user });
}

export const updateUser = async (req, res) => {
	const { name, age, address, authorId } = req.body;
	const user = await User.findByPk(req.params.id);
	if(!user) return res.status(404).json({ error: "User not found"});
	user.name = name || user.name;
	user.age = age || user.age;
	user.address = address || user.address;
	user.authorId = authorId || user.authorId;
	await user.save();
	res.json({ message: "Updated user", user });
}

export const deleteUser = async (req, res) => {
	const user = await User.findByPk(req.params.id);

	if (!user)
		return res.status(404).json({ error: "User not found" });

	await user.destroy();
	res.json({ message: "User deleted" });
}