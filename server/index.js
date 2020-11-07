/* eslint-disable camelcase */
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const pg = require('pg');
const port = 3001;
const app = express();


require('newrelic');

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
            client.end();
            // console.log('Success');
            resolve(res.rows);
          })
          .catch(error => {
            client.end();
            console.log(error);
            reject(error);
          });
      })
      .catch(err => console.log(err))
      .finally(() => pool.end());

  });
};

app.get('/:id', (req, res) => {
  // console.log('here');
  res.sendFile(path.join(__dirname + './../client/dist/index.html'));
});

app.get('/images/:roomId', (req, res) => {
  // console.log(count++);
  let id = Number(req.params.roomId);
  // console.log('typeof id: ', typeof id);
  const sql = `select s.title,s.rating, s.review_count, s.is_super_host, r.photo_url from sdc.roominfo s, sdc.roompictures r where s.room_id = r.room_id and s.room_id = ${id}`;
  queryDB(sql)
    .then(record => {
      // console.log(record);
      if (record.length) {
        let output = {};
        output.title = record[0].title;
        output.rating = record[0].rating;
        output.review_count = record[0].review_count;
        output.is_super_host = record[0].is_super_host;
        output.roomPhotos = record.map(item => item.photo_url);
        res.send(output);
      } else {
        res.status(404).send('Not found!');
      }
    })
    .catch(error => {
      res.status(500).send(error);
      console.log(error);
    });
});

app.put('/images/:roomId', (req, res) => {
  const id = Number(req.params.roomId);
  const deleteSQL = `delete from sdc.roominfo where room_id = ${id};
              delete from sdc.roompictures  where room_id = ${id};`;

  console.log(deleteSQL);
  queryDB(deleteSQL)
    .then(() => {
      console.log(`Deleted record for roomId: ${id}`);

      const {roomId, roomPhotos, title, rating, reviewCount, isSuperHost} = req.body;

      let sql = `insert into sdc.roominfo (room_id,title,rating,review_count,is_super_host) values (${roomId},'${title}',${rating},${reviewCount},${isSuperHost});`;
      roomPhotos.forEach(url => {
        sql += `insert into sdc.roompictures (room_id,photo_url) values (${roomId},'${url}');`;
      });
      queryDB(sql)
        .then(() => {
          console.log('Updated ', roomId);
          res.status(203).send('Updated!');
        })
        .catch(error => {
          console.log(error);
          res.status(500).send(error);
        });
    })
    .catch(error => {
      console.log(error);
      res.status(500).send(error);
    });
});

app.delete('/images/:roomId', (req, res) => {
  const id = Number(req.params.roomId);
  const sql = `delete from sdc.roominfo where room_id = ${id};
              delete from sdc.roompictures  where room_id = ${id};`;

  console.log(sql);
  queryDB(sql)
    .then(record => {
      console.log(`Deleted record for roomId: ${id}`);
      res.status(202).send('Deleted');
    })
    .catch(error => {
      console.log(error);
      res.status(500).send(error);
    });

});


app.post('/images/', (req, res) => {
  // console.log(req.body);
  const {roomId, roomPhotos, title, rating, reviewCount, isSuperHost} = req.body;

  let sql = `insert into sdc.roominfo (room_id,title,rating,review_count,is_super_host) values (${roomId},'${title}',${rating},${reviewCount},${isSuperHost});`;

  roomPhotos.forEach(url => {
    sql += `insert into sdc.roompictures (room_id,photo_url) values (${roomId},'${url}');`;
  });
  queryDB(sql)
    .then(() => {
      console.log('Inserted record ', roomId);
      res.status(201).send('Success!');
    })
    .catch(error => {
      console.log(error);
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
