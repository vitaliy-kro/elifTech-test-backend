const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required!']
    },
    shop: {
      type: String,
      enum: ['Mc-Donny', 'CFK', 'Sandwich-King', 'Pizza-Hot'],
      required: [true, 'Shop is required']
    },
    price: {
      type: Number,
      required: [true, 'Price is required']
    },
    imageURL: String
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

const Product = mongoose.model('product', schema);

module.exports = {
  Product
};
