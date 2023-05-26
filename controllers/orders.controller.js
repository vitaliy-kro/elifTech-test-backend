const { OrdersService } = require('../services/orders.service');

class OrdersController {
  constructor(ordersService) {
    this.ordersService = ordersService;
  }

  async getOrders(req) {
    return await this.ordersService.getAll(req);
  }

  async createOrder(req) {
    return await this.ordersService.createOrder(req);
  }
}

const ordersController = new OrdersController(new OrdersService());

module.exports = {
  ordersController
};
