const { loginServices, userServices } = require('../services');
const { tokenGenerator } = require('../utils/tokenGenerator');

const registerUser = async (req, res) => {
  const user = req.body;
  const checkUser = await loginServices.getUser(user.email, user.password);
  if (checkUser) return res.status(409).json({ message: 'User already registered' });
  const response = await userServices.registerUser(user);
  const token = tokenGenerator(response);

  return res.status(201).json({ token });
};

const listUsers = async (_req, res) => {
  const users = await userServices.listUsers();

  res.status(200).json(users);
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userServices.getUserById(id);

    return res.status(200).json(user);
  } catch (error) {
    res.status(error.statusCode).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {  
  const { user } = req;

  await userServices.deleteUser(user);

  return res.status(204).send();
  } catch (error) {
    return res.status(error.statusCode).json({ message: error.message });
  }
};

module.exports = {
    registerUser,
    listUsers,
    getUserById,
    deleteUser,
};