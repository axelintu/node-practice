let users = [
    {id: 1, name: "Juan Perez"},
    {id: 2, name: "María García"},
    {id: 3, name: "Pepe López"},
    {id: 4, name: "Ana Guevara"},
    {id: 5, name: "Patricio Estrella"},
    {id: 6, name: ""}
];
const parseId = (req, res) => {
    const id = Number(req.params.id);
    if (!Number.isInteger(id) || id < 1) {
        res
            .status(400)
            .json( { message: "El id debe ser un entero mayor o igual a 1"});
        return null;
    }
    return id;
}

const findUserIndexById = (id) => users.findIndex(u => u.id === id);

const validateName = (req, res) => {
    const { name } = req.body;
    if (name === undefined || name === null) {
        res.status(400).json({message: "El campo name es obligatorio"});
        return null;
    }
    if (name !== undefined) {
        if (typeof name !== "string") {
            res.status(400).json(
                { message: "El campo name debe ser un string"}
            );
        }
        const trimmed = name.trim();
        if (trimmed.length<2) {
            res.status(400).json(
                {message: "El campo name debe tener al menos dos caracteres"}
            );
        }
        return trimmed;
    }
    return undefined;
}

export const getUsers = (req, res) => {
    res.json(users);
}

export const getUserById = (req, res) => {
    const id = parseId(req,res);
    if (id === null) return;
    
    const user = users.find((user) => user.id === id);

    if (!user) { return res.status(404).json({ message: "El id no existe" }); }

    return res.json(user);
}

export const createUser = (req, res) => {
    const name = validateName(req,res);
    if (name === null || null === undefined) return; 
    
    const nextId = users.length ? Math.max(...users.map(u=u.id)) + 1 : 1;
    const newUser = { id: nextId, name };
    users.push(newUser);

    return res.status(201).json(newUser);
}

export const updateUser = (req, res) => {
    const id = parseId(req,res);
    if (id === null) return;

    const index = findUserIndexById(id);
    if (index === -1) {
        return res.status(404).json({message: "El id no existe"});
    }
    
    const name = validateName(req,res);
    if (name === null || null === undefined) return;

    const updated = {id, name};
    users[index] = updated;
    return res.json(updated);
}

export const deleteUser = (req, res) => {
    const id = parseId(req,res);
    if (id === null) return;

    const index = findUserIndexById(id);
    if (index === -1) {
        return res.status(404).json({message: "El id no existe"});
    }
    users.slice(index, 1);
    return res.json(users);
}