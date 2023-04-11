const { User } = require('../models');

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

module.exports = {
    registerUser,
    listUsers,
};