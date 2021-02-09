const { Product } = require('../models');

const productData = [
  {
    product_name: 'Plain T-Shirt',
    price: 12.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Running Sneakers',
    price: 89.99,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Kickboxing/Muay Thai Shorts',
    price: 29.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Official Tampa Bay Buccaneers Jersey',
    price: 149.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Cargo Pants',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
