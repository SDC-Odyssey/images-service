const fs = require('fs');
const faker = require('faker');
const AWS = require('aws-sdk');

AWS.config.update({region: 'us-east-1', endpoint: 'http://localhost:8000', accessKeyId: 'fakeMyKeyId', secretAccessKey: 'fakeSecretAccessKey'});
// Create the DynamoDB service object
const dynamodb = new AWS.DynamoDB();

const generator = () => {

  
  // obj.Images = [];
  let data = {};
  let array = [];
  
  for (let i = 1; i <= 100; i++) {
    // let data = {};
    let record = {};
    let picUrls = [];

    let randomRoomQuery = Math.floor(Math.random() * (7 - 5) + 5);
    let randoms = [];
    for (let j = 0; j < randomRoomQuery; j++) {
      let randomPict = Math.floor(Math.random() * 1000);
      if (randoms.includes(randomPict)) {
        randomPict = Math.floor(Math.random() * 1000);
      }
      randoms.push(randomPict);
      
      picUrls.push(`https://sdc-pics.s3.amazonaws.com/sdcPic${randomPict}.jpeg`);
    }
    record.roomPhotos = {'SS': picUrls};
    record.roomId = {'N': JSON.stringify(i)};
    record.title = {'S': faker.lorem.sentence()};
    record.rating = {'N': JSON.stringify(faker.random.number({'min': 1, 'max': 5}))};
    record.reviewCount = {'N': JSON.stringify(faker.random.number({'min': 1, 'max': 10}))};
    record.isSuperHost = {'BOOL': faker.random.arrayElement([true, false])};
    // Item = record;
    // obj.PutRequest.Item = JSON.stringify(record);
    array.push({'PutRequest': {'Item': record}});
  }
  data.Images = array;
  fs.writeFileSync('test.json', JSON.stringify(data), {
    flag: 'a'
  });
};
const generateInDB = () => {
  const docClient = new AWS.DynamoDB.DocumentClient();

  for (let i = 1; i < 1000000; i++) {
    // console.log(i);
    let picUrls = [];

    let randomRoomQuery = Math.floor(Math.random() * (7 - 5) + 5);
    for (let j = 0; j < randomRoomQuery; j++) {
      const randomPict = Math.floor(Math.random() * 1000);
      picUrls.push(`https://sdc-pics.s3.amazonaws.com/sdcPic${randomPict}.jpeg`);
    }
    let params = {
      TableName: 'Images',
      Item: {
        'roomId': i,
        'title': faker.lorem.sentence(),
        'ratings': faker.random.number({'min': 1, 'max': 5}),
        'reviewerCount': faker.random.number({'min': 1, 'max': 10}),
        'isSuperHost': faker.random.arrayElement([true, false]),
        'roomPhotos': picUrls
      }
    };
    
    docClient.put(params, function(err, data) {
      if (err) {
        console.error('Unable to add room. Error JSON:', JSON.stringify(err, null, 2));
      } else {
        // console.log('PutItem succeeded:', data);
      }
    });
    
  }
};
// generateInDB();
generator();

