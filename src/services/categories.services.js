const { Category } = require('../models');

const registerCategory = async (name) => {
  const registeredCategory = await Category.create({ name });

  return registeredCategory;
};

module.exports = {
  registerCategory,
};