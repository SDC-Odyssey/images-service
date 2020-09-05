const mongoose = require('mongoose');
const db = require('./index.js');

const imagesSchema = new mongoose.Schema({
  room_id: Number,
  title: String,
  room_photos: Array,
  host_image: Array,
  reviewers: Array,
  rating: Number,
  review_count: Number,
  is_super_host: Boolean
});

const Images = mongoose.model('Images', imagesSchema);

module.exports = Images;