const fs = require('fs');
const faker = require('faker');

const generateRoomInfoData = () => {
  let rows = 'title,rating,reviewcount,issuperhost\n';
  for (let i = 1; i <= 10000000; i++) {
    rows += `${faker.lorem.sentence()},${faker.random.number({'min': 1, 'max': 5})},${faker.random.number({'min': 1, 'max': 10})},${faker.random.arrayElement([true, false])}\n`;
    if ( i % 50000 === 0 ) {
      fs.writeFileSync('roomInfo.csv', rows, {
        flag: 'a'
      });
      rows = '';
    }
  }
};

const generatePhotoURLData = () => {
  let rows = 'phot_id,photo_url\n';
  for (let i = 1; i <= 10000000; i++) {
    let randomRoomQuery = Math.floor(Math.random() * (7 - 5) + 5);
    for (let j = 0; j < randomRoomQuery; j++) {
      const randomPict = Math.floor(Math.random() * 1000);
      rows += `${i},${`https://sdc-pics.s3.amazonaws.com/sdcPic${randomPict}.jpeg`}\n`;
    }
    if ( i % 5 === 0 ) {
      fs.writeFileSync('PhotoURL.csv', rows, {
        flag: 'a'
      });
      rows = '';
    }
  }
};
generatePhotoURLData();
generateRoomInfoData();