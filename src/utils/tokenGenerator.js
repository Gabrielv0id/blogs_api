const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const tokenGenerator = (response) => {
  const payload = {
    email: response.email,
    id: response.id,
  };

  return jwt.sign(payload, secret, jwtConfig);
};

module.exports = {
  tokenGenerator,
};