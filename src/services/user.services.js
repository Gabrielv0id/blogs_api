const { User } = require('../models');
const customError = require('../utils/customError');

const registerUser = async (user) => {
  const { displayName, email, password, image } = user;
  const registeredUser = await User.create({ displayName, email, password, image });

  return registeredUser;
};

const listUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return users;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  if (!user) throw customError('User does not exist', 404);

  return user;
};

const deleteUser = async (user) => {
  const deletedUser = await User.destroy({ where: { id: user.id } });

  return deletedUser;
};

module.exports = {
    registerUser,
    listUsers,
    getUserById,
    deleteUser,
};