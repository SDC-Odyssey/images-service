const Promise = require('bluebird');
const { getUnsplashRooms, getUnsplashHosts, getUnsplashReviewers } = require('./getUnsplash.js');
const faker = require('faker');


const generateRandomS3urls = (callback) => {
  let randomRoomQuery = Math.floor(Math.random() * (12 - 5) + 5);
  const roomUrls = [];
  for (let i = 0; i < randomRoomQuery; i++) {
    const randomPict = Math.floor(Math.random() * 1000);
    roomUrls.push(`https://sdc-pics.s3.amazonaws.com/sdcPic${randomPict}.jpeg`);
  }
  callback(roomUrls);
};

//generate array of 100 objects for seedingData
const generatePhotos = (num, callback) => {
  const results = [];
  const limit = num * 1000; 
  while (num < limit) {
    let record = {};
    generateRandomS3urls((recordphotos) => {
      record.roomPhotos = recordphotos;
      record.roomId = num;
      record.title = faker.lorem.sentence();
      record.rating = faker.random.number({'min': 1, 'max': 5});
      record.reviewCount = faker.random.number({'min': 1, 'max': 10});
      record.isSuperHost = faker.random.arrayElement([true, false]);
      results.push(record);
    });
    num++;
  }
  callback(results);
};

exports.generatePhotos = generatePhotos;