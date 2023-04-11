const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const tokenGenerator = (response) => {
  const payload = {
    email: response.email,
    id: response.id,
  };

  return jwt.sign(payload, secret);
};

module.exports = {
  tokenGenerator,
};