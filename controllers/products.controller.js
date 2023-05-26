const { ProductsService } = require('../services/products.service');

class ProductsController {
  constructor(productsService) {
    this.productsService = productsService;
  }

  async getProducts(req) {
    return await this.productsService.getAll(req);
  }

  async createProduct(req) {
    return await this.productsService.createProduct(req);
  }
}

const productsController = new ProductsController(new ProductsService());

module.exports = {
  productsController
};
