/* eslint-disable func-style */
const { db } = require('./Images.js');
const Images = require('./Images');
const { generatePhotos } = require('./helpers/generatePhotos');

const dropCollection = () => {
  Images.deleteMany({});
};
const insertseedPhotosDB = () => {
  for (let j = 0; j < 200; j++) {
    generatePhotos(j, (rec) => {
      Images.insertMany(rec)
        .then(() => console.log('success'))
        .catch(err => console.log(err));
    });
  }
};
// dropCollection();
insertseedPhotosDB();
