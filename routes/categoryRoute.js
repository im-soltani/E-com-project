const express = require('express');
const Category = require('../models/categoryModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const categories = await Category.find({});
  res.send(categories);
});

router.post('/add', async (req, res) => {
  const category = new Category({
    label: req.body.label,
  });
  const newCategory = await category.save();
  if (newCategory) {
    return res
      .status(201)
      .send({ message: 'New Category Created', data: newCategory });
  }
  return res.status(500).send({ message: ' Error in Creating Category.' });
});

module.exports = router;
