const { userSchema } = require('../joi/schemas');

module.exports = (req, res, next) => {
  const user = req.body;
  const { error } = userSchema.validate(user);

  if (error) {
    if (error.details[0].type === 'string.min') {
      return res.status(400).json({ message: error.message });
    }
    return res.status(400).json({ message: error.message });
  }

  next();
};