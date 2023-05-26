const Joi = require('joi');

const createProductSchema = Joi.object({
  title: Joi.string().min(3).max(50).required('Title is required!'),
  shop: Joi.string()
    .valid('Mc-Donny', 'CFK', 'Sandwich-King', 'Pizza-Hot')
    .required('Shop is required!'),
  imageURL: Joi.string(),
  price: Joi.number().required('Price is required')
});

const updatePostSchema = Joi.object({
  title: Joi.string().min(3).max(50).optional(),
  description: Joi.string().min(10).max(2000).optional()
})
  .or('title', 'description')
  .required();

module.exports = { createProductSchema, updatePostSchema };
