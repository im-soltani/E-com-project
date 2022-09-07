/* eslint-disable quotes */
const express = require("express");
const Article = require("../models/articleModel");
// eslint-disable-next-line quotes
const { isAuth, isAdmin } = require("../util");

const router = express.Router();

router.get("/", async (req, res) => {
  const articles = await Article.find({});
  res.send(articles);
});

router.get("/:id", async (req, res) => {
  const article = await Article.findOne({ _id: req.params.id });
  if (article) {
    res.send(article);
  } else {
    res.status(404).send({ message: "Product Not Found." });
  }
});

router.put("/post/:id", isAuth, isAdmin, async (req, res) => {
  const articleId = req.params.id;
  const article = await Article.findById(articleId);
  if (article) {
    article.title = req.body.title;
    article.image = req.body.image;
    article.description = req.body.description;
    article.date = new Date();
    const updatedArticle = await article.save();
    if (updatedArticle) {
      return res
        .status(200)
        .send({
          success: true,
          message: "Product Updated",
          data: updatedArticle,
        });
    }
  }
  return res.status(500).send({ message: " Error in Updating Article." });
});

router.delete("/delete/:id", isAuth, isAdmin, async (req, res) => {
  const deletedArticle = await Article.findById(req.params.id);
  if (deletedArticle) {
    await deletedArticle.remove();
    res.send({ message: "Article Deleted" });
  } else {
    res.send("Error in Deletion.");
  }
});

router.post("/post", isAuth, isAdmin, async (req, res) => {
  const article = new Article({
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    date: new Date(),
  });
  const newArticle = await article.save();
  if (newArticle) {
    return res
      .status(201)
      .send({ message: "New Product Created", data: newArticle });
  }
  return res.status(500).send({ message: " Error in Creating Article." });
});

module.exports = router;
