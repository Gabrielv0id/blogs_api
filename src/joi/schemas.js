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

const categoriesSchema = joi.object({
  name: joi.string().required().label('name'),
});

const postSchema = joi.object({
  title: joi.string().required().label('title'),
  content: joi.string().required().label('content'),
  categoryIds: joi.array().min(1).items(joi.number()).required()
  .label('categoryIds'),
});

module.exports = {
  loginSchema,
  userSchema,
  categoriesSchema,
  postSchema,
};