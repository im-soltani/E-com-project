const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, timestamps: true, required: false },
});

const articleModel = mongoose.model("Article", articleSchema);

module.exports = articleModel;
