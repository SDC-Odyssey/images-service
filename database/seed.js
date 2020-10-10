const db = require('./index.js');
const Images = require('./Images');
const { generatePhotos } = require('./helpers/generatePhotos');
const { connection } = require('mongoose');

//100 hosts/rooms worth of data
const insertseedPhotos = function() {
  let num = 1;
  // while (num <= 10) {
  generatePhotos(num, data => {
    Images.remove({}, (err) => {
      if (err) {
        console.log(err);
      } else {
        Images.insertMany(data)
          .then(() => {
            console.log('successfully seeded db!');
            // db.close(); 
          })
          .catch((err) => {
            console.log('error seeding db: ', err);
            // db.close(); 
          });
      }
      // db.close();
    }); 

  });
  //console.log('samplePics: ', samplePics);
  // }
};
insertseedPhotos();