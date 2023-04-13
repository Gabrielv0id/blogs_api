const { postSchema } = require('../joi/schemas');

module.exports = async (req, res, next) => {
  const post = req.body;
  const { error } = await postSchema.validate(post);
  if (error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};