const { BadRequest } = require('../helpers/errors');
const { Product } = require('../schemas/products/products.mongoose.schema');
const { createProductSchema } = require('../schemas/products/products.joi.schema');

class ProductsService {
  async getAll(req) {
    const { limit = 10, page = 1, shop = 'Mc-Donny', title } = req.query;
    const skip = (page - 1) * limit;

    const filters = {
      shop
    };

    if (title) {
      filters.title = new RegExp(title, 'i');
    }

    return Product.find(filters).skip(skip).limit(limit).sort({ createdAt: -1 });
  }

  async createProduct(req) {
    const { body } = req;

    const { error } = createProductSchema.validate(body);

    if (error?.message) {
      throw new BadRequest(error.message);
    }

    return await Product.create(body);
  }
}

module.exports = { ProductsService };
