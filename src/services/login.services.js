const { User } = require('../models');

const getUser = async (email, password) => {
  console.log(email, password);
  const user = await User.findOne({ where: { email, password } });
  console.log(user);
  return user;
};

module.exports = {
  getUser,
};