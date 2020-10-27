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
const generatePhotos = (i, callback) => {
  const results = [];
  let j = (i * 10000) + 1;
  const temp = (i * 10000) + 10000;
  while (j <= temp) {
    let record = {};
    generateRandomS3urls((recordphotos) => {
      record.roomPhotos = recordphotos;
      record.roomId = j;
      record.title = faker.lorem.sentence();
      record.rating = faker.random.number({'min': 1, 'max': 5});
      record.reviewCount = faker.random.number({'min': 1, 'max': 10});
      record.isSuperHost = faker.random.arrayElement([true, false]);
      results.push(record);
    });
    j++;
  }
  callback(results);
};

exports.generatePhotos = generatePhotos;