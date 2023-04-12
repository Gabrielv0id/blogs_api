const { categoriesSevice } = require('../services');

const registerCategory = async (req, res) => {
  const { name } = req.body;

  const response = await categoriesSevice.registerCategory(name);
  return res.status(201).json(response);
};

module.exports = {
  registerCategory,
};