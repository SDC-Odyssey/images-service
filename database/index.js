const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/images'; //db -> images //change this to connect to ec2 instance w/mongodb installed on the instance //to identify if db is running correctly  //if not firewall problem blocking the connection to the db or db isn't setup correctly on ec2 instance

const db = mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
  console.log('connected to db!'); //once I get this log, i'll know db is good, then run seed script to seed db on instance
});


module.exports = db;