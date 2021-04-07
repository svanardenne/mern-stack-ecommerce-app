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

// Method for updating category
exports.update = (req, res) => {
  const category = req.category;
  category.name = req.body.name;
  category.save((err, data) =>  {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json(data);
  });
}

// Method for removing category
exports.remove = (req, res) => {
  const category = req.category;
  category.remove((err, data) =>  {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json({
      message: 'Category deleted'
    });
  });
}

// Method for listing all categories
exports.list = (req, res) => {
  Category.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json(data)
  });
}
