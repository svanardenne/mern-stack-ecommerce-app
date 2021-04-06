const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');

const Product = require('../models/product');
const {errorHandler} = require('../helpers/dbErrorHandler');

// Middleware for finding a product
exports.productById = (req, res, next, id) => {
  Product.findById(id).exec((err, product) => {
    if (err || !product) {
      return res.status(400).json({
        error: 'Product not found'
      });
    }
    req.product = product;
    next();
  });
};

exports.read = (req, res) => {
  req.product.photo = undefined;
  return res.json(req.product);
};

// Middleware for creating and saving a product in the database
exports.create = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: 'Image could not be uploaded'
      });
    }

    // check for all fields
    const {
      name, 
      description, 
      price, 
      category, 
      quantity, 
      shipping
    } = fields;

    if (!name || !description || !price || !category || !quantity || !shipping) {
      return res.status(400).json({
        error: 'All fields are required'
      });
    }

    // creates product variable using field info
    let product = new Product(fields);

    // Adds photo data to product if size is under 1mb
    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: 'Image should be less than 1mb in size'
        });
      }
      product.photo.data = fs.readFileSync(files.photo.path);
      product.photo.contentType = files.photo.type;
    }

    // Saves product to database
    product.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler
        });
      }
      res.json(result);
    });
  });
}