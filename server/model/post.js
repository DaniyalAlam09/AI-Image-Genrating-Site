const mongoose = require("mongoose");
const PostSchema = mongoose.Schema({
  name: { type: String, required: true },
  prompt: { type: String, required: true },
  photo: { type: String },
});

module.exports = mongoose.model("Post", PostSchema);
