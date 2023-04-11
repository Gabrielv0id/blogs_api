const joi = require('joi');

const loginSchema = joi.object({
  email: joi.string().required().label('email'),
  password: joi.string().required().label('password'),
});

module.exports = {
  loginSchema,
};