const Promise = require('bluebird');
const { getUnsplashRooms, getUnsplashHosts, getUnsplashReviewers } = require('./getUnsplash.js');
const faker = require('faker');


async function allUrls() {
  let allPhotos = {};

  let roomQueries = ['living', 'indoors', 'room', 'interior', 'home'];
  const getRandomRoomPic = () => {
    var index = Math.floor(Math.random() * roomQueries.length);
    return roomQueries[index];
  };
  let randomRoomQuery = getRandomRoomPic();
  let max = faker.random.number({'min': 3, 'max': 12});
  let roomUrls = [];
  let rooms = await getUnsplashRooms(randomRoomQuery, max);
  //can write synchronously here, because the timing is handled under hood???
  for (let i = 0; i < rooms.length; i++) { //getting into loop before fulfilled
    roomUrls.push(rooms[i].urls.raw + "&w=1057");
  }
  allPhotos.roomPhotos = roomUrls;

  let hostQueries = ['woman', 'man', 'person', 'happy', 'portrait', 'cheerful', 'hipster', 'human', 'alone', 'couple', 'family', 'people'];
  const getRandomHostPic = () => {
    var index = Math.floor(Math.random() * hostQueries.length);
    return hostQueries[index];
  };
  let randomHostQuery = getRandomHostPic();
  let hostUrls = [];
  let hosts = await getUnsplashHosts(randomHostQuery)
  for (let i = 0; i < hosts.length; i++) {
    hostUrls.push(hosts[i].urls.raw + "&w=204");
  }
  allPhotos.hostPhotos = hostUrls;

  let reviewerQueries = ['excited', 'person', 'happy', 'portrait', 'cheerful', 'hipster', 'couple', 'people', 'human', 'glad'];
  const getRandomReviewerPic = () => {
    var index = Math.floor(Math.random() * reviewerQueries.length);
    return reviewerQueries[index];
  };
  let randomReviewerQuery = getRandomReviewerPic();
  max = faker.random.number({'min': 3, 'max': 16});
  let reviewerUrls = [];
  let reviewers = await getUnsplashReviewers(randomReviewerQuery, max)
  for (let i = 0; i < reviewers.length; i++) { //getting into loop before fulfilled
    reviewerUrls.push(reviewers[i].urls.raw + "&w=204");
  }
  allPhotos.reviewerPhotos = reviewerUrls;
  return allPhotos;
};

//generate array of 100 objects for seedingData
async function generatePhotos() {
  const results = [];
  const range = [];
  for (let i = 1; i < 101; i++) {
    range.push(i);
  }
  for (const j of range) { //not fulfilling all of loop- sporadic
    await allUrls()
    //only working w/ .then after await, not working without like above
      .then((value) => {
        let photos = {};
        photos.room_id = j;
        photos.title = faker.lorem.sentence({'wordCount': 3});
        photos.room_photos = value.roomPhotos;
        photos.host_image = value.hostPhotos;
        photos.reviewers = value.reviewerPhotos;
        photos.rating = faker.random.number({'min': 1, 'max': 5});
        photos.review_count = faker.random.number({'min': 1, 'max': 10});
        photos.isSuperHost = faker.random.arrayElement([true, false]);
        results.push(photos);
      })
      .catch((err) => console.log('error getting allUrls: ', err));
  }
  //console.log('results.length: ', results.length);
  return results;
};


generatePhotos()
  .then((results) => {
    console.log('generatePhotos results: ', results);
  })

exports.generatePhotos = generatePhotos;