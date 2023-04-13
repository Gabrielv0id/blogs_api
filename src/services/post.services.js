const { BlogPost, PostCategory, Category } = require('../models');

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

module.exports = {
  registerPost,
};