const { categoriesSevice } = require('../services');

const registerCategory = async (req, res) => {
  const { name } = req.body;

  const response = await categoriesSevice.registerCategory(name);
  return res.status(201).json(response);
};

const listCategories = async (_req, res) => {
  const response = await categoriesSevice.listCategories();

  return res.status(200).json(response);
};

module.exports = {
  registerCategory,
  listCategories,
};