const db = require('./index.js');
const Images = require('./Images');
const { generatePhotos } = require('./helpers/generatePhotos');

//100 hosts/rooms worth of data
const insertseedPhotos = async function() {
  let samplePics = await generatePhotos();
  //console.log('samplePics: ', samplePics);
  Images.insertMany(samplePics)
    .then(() => {
      console.log('successfully seeded db!');
    })
    .catch((err) => {
      console.log('error seeding db: ', err);
    });
};
insertseedPhotos();