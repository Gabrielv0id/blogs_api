const joi = require('joi');

const loginSchema = joi.object({
  email: joi.string().email().required().label('email'),
  password: joi.string().min(6).required().label('password'),
});

const userSchema = joi.object({
  displayName: joi.string().min(8).required().label('displayName'),
  email: joi.string().email().required().label('email'),
  password: joi.string().min(6).required().label('password'),
  image: joi.string().label('image'),
});

module.exports = {
  loginSchema,
  userSchema,
};