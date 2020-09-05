const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/images'; //db -> images

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
  console.log('connected to db!');
});


module.exports = db;