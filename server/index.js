const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
//const cloudinary = require('cloudinary').v2;
//const streamifier = require('streamifier');
//const fs = require('fs');
const db = require('../database/index.js');
const Images = require('../database/Images.js');

const port = 3001;
const app = express();
const fileUpload = multer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());


app.get('/images', (req, res) => {
  Images.find({})
    .then((data) => {
      res.send(data);
      console.log('success getting data from images db');
    })
    .catch((err) => {
      res.status(500);
      console.log('error getting data from images db: ', err);
    });
});

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + './../client/dist/index.html'));
});

app.get('/images/:roomId', (req, res) => {
  console.log('typeof req.params.roomId: ', typeof req.params.roomId);
  let id = Number(req.params.roomId);
  console.log('typeof id: ', typeof id);
  Images.find({room_id: id})
    .then((data) => {
      res.send(data);
      console.log('images by id: ', data);
    })
    .catch((err) => {
      res.status(500);
      console.log('error getting room id from images db: ', err);
    });
});




app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

//for testing instead of listen above:
//module.exports = app;