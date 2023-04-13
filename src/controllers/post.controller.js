const { postServices } = require('../services');

const registerPost = async (req, res) => {
  try {
    const post = req.body;
    const { user } = req;

    const response = await postServices.registerPost(post, user);

    return res.status(201).json(response);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  registerPost,
};