const { BlogPost, PostCategory, Category, User } = require('../models');
const customError = require('../utils/customError');

const registerPost = async (post, user) => {
  const { title, content, categoryIds } = post;

  const categories = await Category.findAll({ where: { id: categoryIds } });
  if (categories.length !== categoryIds.length) {
    throw new Error('one or more "categoryIds" not found');
  }

  const registeredPost = await BlogPost.create({ 
    title,
    content,
    userId: user.id,
  });
  
  const registeredPostAndCategories = categoryIds.map((categoryId) => ({
    postId: registeredPost.id,
    categoryId,
  }));

  await PostCategory.bulkCreate(registeredPostAndCategories);

  return registeredPost;
};

const listPosts = () => {
  const posts = BlogPost.findAll({ 
    include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
    { model: Category, as: 'categories' }] });
  return posts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category, as: 'categories' }],
    });

  if (!post) throw customError('Post does not exist', 404);

  return post;
};

const updatePost = async (id, post, user) => {
  const { title, content } = post;

  const getPost = await getPostById(id);
  if (getPost.userId !== user.id) throw customError('Unauthorized user', 401);

  await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  const updatedPost = await getPostById(id);
  return updatedPost;
};

const deletePost = async (id, user) => {
  const getPost = await getPostById(id);

  if (getPost.userId !== user.id) throw customError('Unauthorized user', 401);

  const deletedPost = await BlogPost.destroy({ where: { id } });

  return deletedPost;
};

module.exports = {
  registerPost,
  listPosts,
  getPostById,
  updatePost,
  deletePost,
};