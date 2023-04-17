const { updatePostSchema } = require('../joi/schemas');

module.exports = (req, res, next) => {
    const post = req.body;
    const { error } = updatePostSchema.validate(post);
  
    if (error) return res.status(400).json({ message: 'Some required fields are missing' });
    
    next();
  };