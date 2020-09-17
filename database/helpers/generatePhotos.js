const Promise = require('bluebird');
const { getUnsplashRooms, getUnsplashHosts, getUnsplashReviewers } = require('./getUnsplash.js');
const faker = require('faker');


async function allUrls() {
  let allPhotos = {};

  let roomQueries = ['cottage,interior', 'contemporary,cabin,room', 'living', 'cozy', 'room', 'modern,warm,interior', 'interior', 'contemporary,living,home', 'home', 'modern,rustic,home', 'cozy,interior', 'cabin,interior', 'cozy,cabin,room', 'modern,home,interior', 'hygge', 'glamping'];
  const getRandomRoomPic = () => {
    var index = Math.floor(Math.random() * roomQueries.length);
    return roomQueries[index];
  };
  let randomRoomQuery = getRandomRoomPic();
  let max = faker.random.number({'min': 5, 'max': 12});
  const roomUrls = [];
  const rooms = await getUnsplashRooms(randomRoomQuery, max);
  for (const element in rooms) {
    roomUrls.push(rooms[element].urls.raw + "&w=1057");
  }
  allPhotos.roomPhotos = roomUrls;

  let hostQueries = ['woman', 'man', 'person', 'happy', 'portrait', 'cheerful', 'hipster', 'human', 'couple', 'family'];
  const getRandomHostPic = () => {
    var index = Math.floor(Math.random() * hostQueries.length);
    return hostQueries[index];
  };
  let randomHostQuery = getRandomHostPic();
  const hostUrls = [];
  const hosts = await getUnsplashHosts(randomHostQuery);
  for (const element in hosts) {
    hostUrls.push(hosts[element].urls.raw + "&w=204");
  }
  allPhotos.hostPhotos = hostUrls;

  let reviewerQueries = ['excited', 'hippy', 'gleeful', 'playful', 'dancer', 'friends', 'glad'];
  const getRandomReviewerPic = () => {
    var index = Math.floor(Math.random() * reviewerQueries.length);
    return reviewerQueries[index];
  };
  let randomReviewerQuery = getRandomReviewerPic();
  max = faker.random.number({'min': 3, 'max': 16});
  const reviewerUrls = [];
  const reviewers = await getUnsplashReviewers(randomReviewerQuery, max);
  for (const element in reviewers) {
    reviewerUrls.push(reviewers[element].urls.raw + "&w=204");
  }
  allPhotos.reviewerPhotos = reviewerUrls;
  return allPhotos;
};

//generate array of 100 objects for seedingData
async function generatePhotos() {
  const results = [];
  let i = 1;
  while (results.length < 100) {
    const allPhotos = await allUrls();
    let photos = {};
    photos.room_id = i;
    photos.title = faker.lorem.sentence();
    photos.rating = faker.random.number({'min': 1, 'max': 5});
    photos.review_count = faker.random.number({'min': 1, 'max': 10});
    photos.is_super_host = faker.random.arrayElement([true, false]);
    for (const key in allPhotos) {
      if (key === 'roomPhotos') {
        photos.room_photos = allPhotos[key];
      }
      if (key === 'hostPhotos') {
        photos.host_image = allPhotos[key];
      }
      if (key === 'reviewerPhotos') {
        photos.reviewers = allPhotos[key];
      }
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