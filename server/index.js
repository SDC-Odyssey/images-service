/* eslint-disable camelcase */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const pg = require('pg');
const { compose } = require('underscore');
const port = 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static(__dirname + '/../client/dist'));

const config = {
  user: 'me',
  host: 'localhost',
  database: 'oddesey',
  password: 'password',
  port: 5432,
};

// Run DB query
const queryDB = (query)=> {
  const pool = new pg.Pool(config);
  return new Promise((resolve, reject) => {
    pool.connect()
      .then(client => {
        return client.query(query)
          .then(res => {
            client.release();
            console.log('Success');

            resolve(res.rows);
            // callback(null, res.rows);
          })
          .catch(error => {
            client.release();
            console.log(error);
            reject(error);
            // callback(error, null);
          });
      }).finally(() => pool.end());

  });
};

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + './../client/dist/index.html'));
});

app.get('/images/:roomId', (req, res) => {
  console.log('typeof req.params.roomId: ', typeof req.params.roomId);
  let id = Number(req.params.roomId);

  console.log('typeof id: ', typeof id);
  const sql = `select * from sdc.roomInfo where room_id = ${id}`;
  queryDB(sql)
    .then(roomInfo => {

      queryDB(`select photo_url from sdc.roomPictures where room_id = ${id}`)
        .then(pics => {
          roomInfo[0].roomPhotos = [];
          pics.forEach(picUrl => {
            roomInfo[0].roomPhotos.push(picUrl.photo_url);
          });
          console.log('--------', roomInfo);
          res.send(roomInfo[0]);
        })
        .catch(err => {
          res.status(500);
          console.log(err);
        });
    })
    .catch(error => console.log(error));
});

app.put('/images/:roomId', (req, res) => {
  let id = Number(req.params.roomId);
  res.end();
  // Images.findOne({roomId: id}, (err, data) => {
  //   if (err) { 
  //     console.log(err); 
  //     res.status(500).send(err);
  //   } else {
  //     if (!data) {
  //       res.status(404).send('No record found to update!');
  //     } else {
  //       const {roomPhotos, title, rating, reviewerCount, isSuperHost} = req.body;
  //       data.roomPhotos = roomPhotos;
  //       data.title = title;      
  //       data.rating = rating;
  //       data.reviewerCount = reviewerCount;
  //       data.isSuperHost = isSuperHost;
  //       data.save();
  //       res.status(202).send('Success!');
  //     }
  //   }
  // });
});

app.delete('/images/:roomId', (req, res) => {
  let id = Number(req.params.roomId);
  res.end();
  // Images.findOneAndRemove({roomId: id})
  //   .then((data) => {
  //     if (data) {
  //       res.status(201).send(`Deleted record for roomId: ${id} `);
  //     } else {
  //       res.status(404).send('No record found to update!');
  //     } 
  //   })
  //   .catch((err) => {
  //     res.status(500).send(err);
  //     console.log('error getting room id from images db: ', err);
  //   });
});


app.post('/images/', (req, res) => {
  let newRecord = new Images();
  const {roomPhotos, room_id, title, rating, review_count, is_super_host} = req.body;
  newRecord.roomPhotos = roomPhotos;
  newRecord.roomId = roomId;
  newRecord.title = title;
  newRecord.rating = rating;
  newRecord.reviewCount = reviewCount;
  newRecord.isSuperHost = isSuperHost;
  if (!newRecord.roomId) {
    res.status(403).send('Error! Not roomId field provided!');
  } else {
    res.end();
    // Images.findOne({roomId: newRecord.roomId}, (err, data) => {
    //   if (err) {
    //     res.status(500).send(err);
    //   } else {
    //     if (!!data) {
    //       res.status(403).send('Record already exists!');
    //     } else {
    //       newRecord.save();
    //       res.status(201).send('Success!');
    //     }
    //   }
    // });
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

//for testing instead of listen above:
//module.exports = app;