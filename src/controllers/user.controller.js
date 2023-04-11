const { loginServices, userServices } = require('../services');
const { tokenGenerator } = require('../utils/tokenGenerator');

const registerUser = async (req, res) => {
  const user = req.body;
  const checkUser = await loginServices.getUser(user.email, user.password);
  if (checkUser) return res.status(409).json({ message: 'User already registered' });
  console.log('cheguei dps da validacao');
  const response = await userServices.registerUser(user);
  const token = tokenGenerator(response);

  return res.status(201).json({ token });
};

module.exports = {
    registerUser,
};