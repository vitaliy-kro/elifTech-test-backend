const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required!']
    },
    email: {
      type: String,
      required: [true, 'Email is required!']
    },
    phone: {
      type: String,
      required: [true, 'Phone is required!']
    },
    products: {
      type: [
        {
          id: { type: String, required: true },
          imageURL: { type: String, required: true },
          price: { type: Number, required: true },
          quantity: { type: Number, required: true },
          title: { type: String, required: true },
          shop: {
            type: String,
            enum: ['Mc-Donny', 'CFK', 'Sandwich-King', 'Pizza-Hot'],
            required: true
          },
          total: { type: Number, required: true }
        }
      ],
      required: [true, 'Products is required!']
    },
    address: {
      type: String,
      required: [true, 'Address is required!']
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required!']
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

schema.virtual('id').get(function () {
  return this._id.toHexString();
});

schema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    delete ret._id;
  }
});

const Order = mongoose.model('order', schema);

module.exports = {
  Order
};
