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

const listPosts = async (_req, res) => {
  const response = await postServices.listPosts();

  return res.status(200).json(response);
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await postServices.getPostById(id);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(error.statusCode).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = req.body;
    const { user } = req;
    const { id } = req.params;

    const response = await postServices.updatePost(id, post, user);

    return res.status(200).json(response);
  } catch (error) {
    return res.status(error.statusCode).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { user } = req;
    const { id } = req.params;

    await postServices.deletePost(id, user);

    return res.status(204).send();
  } catch (error) {
    return res.status(error.statusCode).json({ message: error.message });
  }
};

module.exports = {
  registerPost,
  listPosts,
  getPostById,
  updatePost,
  deletePost,
};