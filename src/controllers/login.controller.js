const { loginServices } = require('../services');
const { tokenGenerator } = require('../utils/tokenGenerator');

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const response = await loginServices.getUser(email, password);
  if (!response) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const token = tokenGenerator(response);
  return res.status(200).json({ token });
};

module.exports = {
  userLogin,
};