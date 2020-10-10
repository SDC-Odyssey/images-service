const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const multer = require('multer');
const path = require('path');
// const db = require('../database/index.js');
const Images = require('../database/Images.js');

const port = 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));


// app.get('/images', (req, res) => {
//   Images.find({})
//     .then((data) => {
//       res.send(data);
//       console.log('success getting data from images db');
//     })
//     .catch((err) => {
//       res.status(500);
//       console.log('error getting data from images db: ', err);
//     });
// });

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + './../client/dist/index.html'));
});

app.get('/images/:roomId', (req, res) => {
  console.log('typeof req.params.roomId: ', typeof req.params.roomId);
  let id = Number(req.params.roomId);
  console.log('typeof id: ', typeof id);
  Images.find({roomId: id})
    .then((data) => {
      res.send(data);
      console.log('images by id: ', data);
    })
    .catch((err) => {
      res.status(500);
      console.log('error getting room id from images db: ', err);
    });
});

app.put('/images/:roomId', (req, res) => {
  let id = Number(req.params.roomId);
  Images.findOne({roomId: id}, (err, data) => {
    if (err) { 
      console.log(err); 
      res.status(500).send(err);
    } else {
      if (!data) {
        res.status(404).send('No record found to update!');
      } else {
        const {roomPhotos, title, rating, reviewerCount, isSuperHost} = req.body;
        data.roomPhotos = roomPhotos;
        data.title = title;      
        data.rating = rating;
        data.reviewerCount = reviewerCount;
        data.isSuperHost = isSuperHost;
        data.save();
        res.status(202).send('Success!');
      }
    }
  });
});

app.delete('/images/:roomId', (req, res) => {
  let id = Number(req.params.roomId);

  Images.findOneAndRemove({roomId: id})
    .then((data) => {
      if (data) {
        res.status(201).send(`Deleted record for roomId: ${id} `);
      } else {
        res.status(404).send('No record found to update!');
      } 
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log('error getting room id from images db: ', err);
    });
});


app.post('/images/', (req, res) => {
  let newRecord = new Images();
  const {roomPhotos, roomId, title, rating, reviewCount, isSuperHost} = req.body;
  newRecord.roomPhotos = roomPhotos;
  newRecord.roomId = roomId;
  newRecord.title = title;
  newRecord.rating = rating;
  newRecord.reviewCount = reviewCount;
  newRecord.isSuperHost = isSuperHost;
  if (!newRecord.roomId) {
    res.status(403).send('Error! Not roomId field provided!');
  } else {
    Images.findOne({roomId: newRecord.roomId}, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        if (!!data) {
          res.status(403).send('Record already exists!');
        } else {
          newRecord.save();
          res.status(201).send('Success!');
        }
      }
    });
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

//for testing instead of listen above:
//module.exports = app;