const Promise = require('bluebird');
const { getUnsplashRooms, getUnsplashHosts, getUnsplashReviewers } = require('./getUnsplash.js');
const faker = require('faker');


async function allUrls() {
  let allPhotos = {};
  https://source.unsplash.com/random/?cottage,interior
  let roomQueries = ['cottage,interior', 'contemporary,cabin,room', 'living', 'cozy', 'room', 'modern,warm,interior', 'interior', 'contemporary,living,home', 'home', 'modern,rustic,home', 'cozy,interior', 'cabin,interior', 'cozy,cabin,room', 'modern,home,interior', 'hygge', 'glamping'];
  const getRandomRoomPic = () => {
    var index = Math.floor(Math.random() * roomQueries.length);
    return roomQueries[index];
  };
  let randomRoomQuery = getRandomRoomPic();
  // let max = faker.random.number({'min': 5, 'max': 12});
  const roomUrls = [];
  const rooms = await getUnsplashRooms(randomRoomQuery, max);
  for (const element in rooms) {
    roomUrls.push(rooms[element].urls.raw + "&w=1057");
  }
  allPhotos.roomPhotos = roomUrls;
  return allPhotos;
};

//generate array of 100 objects for seedingData
async function generatePhotos() {
  const results = [];
  let i = 1;
  while (results.length < 100) {
    const allPhotos = await allUrls();
    let photos = {};
    photos.roomId = i;
    photos.title = faker.lorem.sentence();
    photos.rating = faker.random.number({'min': 1, 'max': 5});
    photos.reviewCount = faker.random.number({'min': 1, 'max': 10});
    photos.isSuperHost = faker.random.arrayElement([true, false]);
    for (const key in allPhotos) {
      if (key === 'roomPhotos') {
        photos.roomPhotos = allPhotos[key];
      }
      // if (key === 'hostPhotos') {
      //   photos.hostImage = allPhotos[key];
      // }
      // if (key === 'reviewerPhotos') {
      //   photos.reviewers = allPhotos[key];
      // }
    }
    results.push(photos);
    i++;
  }
  return results;
};


// generatePhotos()
//   .then((results) => {
//     console.log('generatePhotos results[0]: ', results[0]);
//   })

exports.generatePhotos = generatePhotos;