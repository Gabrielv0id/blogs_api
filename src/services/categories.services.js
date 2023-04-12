const { Category } = require('../models');

const registerCategory = async (name) => {
  const registeredCategory = await Category.create({ name });

  return registeredCategory;
};

const listCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

module.exports = {
  registerCategory,
  listCategories,
};