const { createOrderSchema } = require('../schemas/orders/orders.joi.schema');
const { BadRequest } = require('../helpers/errors');
const { Order } = require('../schemas/orders/orders.mongoose.schema');

class OrdersService {
  async getAll(req) {
    const { limit = 10, page = 1 } = req.query;
    const skip = (page - 1) * limit;

    return Order.find().skip(skip).limit(limit).sort({ createdAt: -1 });
  }

  async createOrder(req) {
    const { body } = req;

    const { error } = createOrderSchema.validate(body);

    if (error?.message) {
      throw new BadRequest(error.message);
    }

    return await Order.create(body);
  }
}

module.exports = { OrdersService };
