import User from "../models/User.js";

export const getUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error en el servidor" });
	}
};
export const getUserById = async (req, res) => {
	try {
		const id = req.params.id;
		if (!id) {
			return res.status(400).json({ message: "El id es requerido" });
		}
		const user = await User.findById(id);
		if (!user) {
			return res.status(404).json({ message: "Usuario no encontrado" });
		}
		res.status(200).json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error en el servidor" });
	}
};
export const createUser = async (req, res) => {
	try {
		const { name } = req.body;
		if (!name) {
			return res.status(400).json({ message: "El nombre es requerido" });
		}
		const user = new User({ name });
		await user.save();

		res.status(201).json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: "Error en el servidor" });
	}
};
// export const getUsers1 = async (req, res) => {
// 	try {
// 		const users = await User.find();
// 		res.status(200).json(users);
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).json({message: 'Error en el servidor'});
// 	}
// }
// export const getUsers2 = async (req, res) => {
// 	try {
// 		const users = await User.find();
// 		res.status(200).json(users);
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).json({message: 'Error en el servidor'});
// 	}
// }
