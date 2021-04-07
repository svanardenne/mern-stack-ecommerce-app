const Category = require('../models/category');
const {errorHandler} = require('../helpers/dbErrorHandler');

exports.categoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      res.status(400).json({
        error: 'Category does not exist'
      });
    }
    req.category = category;
    next();
  });
}

// Read method for fetched category data
exports.read = (req, res) => {
  return res.json(req.category);
};

// Method for creating category
exports.create = (req, res) => {
  const category = new Category(req.body);
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json({ data });
  });
}
