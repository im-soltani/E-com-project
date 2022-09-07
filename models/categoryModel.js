const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
  },
);

const categoryModel = mongoose.model('Category', categorySchema);

module.exports = categoryModel;
