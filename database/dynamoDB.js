// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set the region 
const fs = require('fs');

AWS.config.update({region: 'us-east-1', endpoint: 'http://localhost:8000', accessKeyId: 'fakeMyKeyId', secretAccessKey: 'fakeSecretAccessKey'});
// Create the DynamoDB service object
const dynamodb = new AWS.DynamoDB();


const putData = () => {
  const docClient = new AWS.DynamoDB.DocumentClient();

  console.log('Importing movies into DynamoDB. Please wait.');


  // ------------
  const allRecords = JSON.parse(fs.readFileSync('test1.json', 'utf8'));
  allRecords.forEach(function(room) {
    let params = {
      TableName: 'Images',
      Item: {
        'roomId': room.roomId,
        'title': room.title,
        'ratings': room.ratings,
        'reviewerCount': room.reviewerCount,
        'isSuperHost': room.isSuperHost,
        'roomPhotos': room.roomPhotos
      }
    };
    
    docClient.put(params, function(err, data) {
      if (err) {
        console.error('Unable to add room', room.title, '. Error JSON:', JSON.stringify(err, null, 2));
      } else {
        console.log('PutItem succeeded:', room.title);
      }
    });
  });
  // ------------

};


const deleteTable = (table) => {
  const params = {
    TableName: table
  };

  dynamodb.deleteTable(params, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log('deleted');
    }
  });
};

const createTables = () => {

  const params = {
    TableName: 'Images',
    KeySchema: [
      { AttributeName: 'roomId', KeyType: 'HASH'},
      { AttributeName: 'title', KeyType: 'RANGE'}
    ],
    AttributeDefinitions: [
      { AttributeName: 'roomId', AttributeType: 'N' },
      { AttributeName: 'title', AttributeType: 'S' },

    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5
    }
  };
    
  dynamodb.createTable(params, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  });
};

const getRecord = (roomId) => {
  const docClient = new AWS.DynamoDB.DocumentClient();
  const params = {
    TableName: 'Images',
    KeyConditionExpression: '#roomId = :id',
    ExpressionAttributeNames: {
      '#roomId': 'roomId'
    },
    ExpressionAttributeValues: {
      ':id': roomId
    }
  };

  docClient.query(params, function(err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(data.Items[0]);
    }
  });
};


const generator = () => {
  let data = {};
  let array = [];
  
  for (let i = 1; i <= 10000000; i++) {
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

    array.push({'PutRequest': {'Item': record}});
    if (i % 25 === 0) {
      let params = {
        RequestItems: {
          'Images': array
        }
      };

      dynamodb.batchWriteItem(params, (err, data) => {
        if (err) { console.log(err); }
      });

      array = [];
    }
  }
};

// generator();
// putData();
// getRecord(1);
createTables();
// deleteTable('Images');


// aws dynamodb batch-write-item          
// --endpoint-url http://localhost:8000           
// --request-items file:////Users/aslanbekdarchiev/Desktop/hackreactor/images-service/test.json        
// --return-consumed-capacity  TOTAL         
// --return-item-collection-metrics  SIZE

// get count
// aws dynamodb scan --table-name Images   --endpoint-url http://localhost:8000 --select "COUNT"

// to start dynamoDB locally
// java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb