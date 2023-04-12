const { categoriesSchema } = require('../joi/schemas');

module.exports = (req, res, next) => {
  const { name } = req.body;
  const { error } = categoriesSchema.validate({ name });

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};