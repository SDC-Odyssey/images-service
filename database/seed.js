const db = require('./index.js');
const Images = require('./Images');
const { generatePhotos } = require('./helpers/generatePhotos');
const { connection } = require('mongoose');

//100 hosts/rooms worth of data
const insertseedPhotos = async function() {
  let samplePics = await generatePhotos();
  //console.log('samplePics: ', samplePics);
  Images.remove({}, (err) => {
    if (err) {
      console.log(err);
    } else {
    Images.insertMany(samplePics)
      .then(() => {
        console.log('successfully seeded db!');
      })
      .catch((err) => {
        console.log('error seeding db: ', err);
      });
    }
  }); 
  db.close();  
};
insertseedPhotos();