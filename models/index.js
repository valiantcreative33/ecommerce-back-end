// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Category.hasMany(Product);

Product.belongsTo(Category);

Product.belongsToMany(Tag, {
  through: ProductTag
});

Tag.belongsToMany(Product);

// Products belongsTo Category

// Categories have many Products

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
