const Joi = require('joi');

const createOrderSchema = Joi.object({
  name: Joi.string().required('Name is required!'),
  email: Joi.string().email().required('Email is required!').messages({
    'string.email': 'Please provide a valid email address!'
  }),
  phone: Joi.string().required('Phone is required!'),
  products: Joi.array()
    .items(
      Joi.object({
        id: Joi.string().required(),
        imageURL: Joi.string().required(),
        price: Joi.number().required(),
        quantity: Joi.number().required(),
        title: Joi.string().required(),
        total: Joi.number().required(),
        shop: Joi.string().valid('Mc-Donny', 'CFK', 'Sandwich-King', 'Pizza-Hot')
      })
    )
    .required('Products must be an array!')
    .messages({
      'array.empty': 'Products is required!'
    }),
  address: Joi.string().required('Address is required!'),
  totalPrice: Joi.number().required('Total price is required!').messages({
    'number.base': 'Total price must be a number!'
  })
});

module.exports = {
  createOrderSchema
};
