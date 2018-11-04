const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  headline: { type: String, required: true, unique: true },
  date: { type: String, required: true },
  link: { type: String, required: true },
  category: { type: String, required: true }
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
