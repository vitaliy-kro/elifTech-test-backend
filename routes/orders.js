const express = require('express');
const { tryCatchMiddleware } = require('../middlewares/tryCatch.middleware');
const { ordersController } = require('../controllers/orders.controller');

const ordersRouter = express.Router();

ordersRouter.get('/', tryCatchMiddleware(ordersController.getOrders.bind(ordersController)));
ordersRouter.post('/', tryCatchMiddleware(ordersController.createOrder.bind(ordersController)));

module.exports = {
  ordersRouter
};
