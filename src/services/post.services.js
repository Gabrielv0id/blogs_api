const { BlogPost, PostCategory, Category, User } = require('../models');

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

module.exports = {
  registerPost,
  listPosts,
};