const express = require('express');
const { productsController } = require('../controllers/products.controller');
const { tryCatchMiddleware } = require('../middlewares/tryCatch.middleware');

const productsRouter = express.Router();

productsRouter.get(
  '/',
  tryCatchMiddleware(productsController.getProducts.bind(productsController))
);
productsRouter.post(
  '/',
  tryCatchMiddleware(productsController.createProduct.bind(productsController))
);

module.exports = {
  productsRouter
};
