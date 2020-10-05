const mongoose = require('mongoose');
const db = require('./index.js');

const imagesSchema = new mongoose.Schema({
  roomId: Number,
  title: String,
  roomPhotos: Array,
  // hostImage: Array,
  // reviewers: Array,
  rating: Number,
  reviewCount: Number,
  isSuperHost: Boolean
});

const Images = mongoose.model('Images', imagesSchema);

module.exports = Images;