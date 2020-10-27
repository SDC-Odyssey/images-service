const couchbase = require('couchbase');
const faker = require('faker');
const fs = require('fs');

// const cluster = new couchbase.Cluster('couchbase://localhost', {
//   username: 'Administrator',
//   password: 'password',
// });

// const bucket = cluster.bucket('Images');

// get a reference to the default collection
// const collection = bucket.defaultCollection();

// const record = {
//   roomId: 1,
//   title: 't1',
//   ratings: 11,
//   reviewerCount: 1,
//   isSuperHost: true,
//   roomPhotos: ['r1', 'r2']
// };

// const upsertDocument = async (doc) => {
//     const key = `${doc.roomId}`;
//     collection.upsert(key, doc, (err, data) => {
//       if (err) console.log(err);
//     });

// };

// get document function
// const getAirlineByKey = async (key) => {
//   try {
//     const result = await collection.get(key);
//     console.log("Get Result: ");
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// };
// const upsertMultipleDocuments = async (arr) => {
//   try {
//     await Promise.all(
//       arr.map(record => {
//         // console.log(record.roomId);
//         const key = `${record.roomId}`;
//         collection.upsert(key, record);
//       })
//     ).catch(err => console.log('----------',err))
//   } catch (error) {
//     console.error('First failure:', error)
//   }
// }

// const bulk = () =>{
//   let array = []
//   for (let i = 200000; i <= 300000; i++) {
//     const randomRoomQuery = Math.floor(Math.random() * (12 - 5) + 5);
//     const roomUrls = [];
//     for (let i = 0; i < randomRoomQuery; i++) {
//       const randomPict = Math.floor(Math.random() * 1000);
//       roomUrls.push(`https://sdc-pics.s3.amazonaws.com/sdcPic${randomPict}.jpeg`);
//     }
//     const record = {
//       roomId: i,
//       title: faker.lorem.sentence(),
//       ratings: faker.random.number({'min': 1, 'max': 5}),
//       reviewerCount: faker.random.number({'min': 1, 'max': 10}),
//       isSuperHost: faker.random.arrayElement([true, false]),
//       roomPhotos: roomUrls
//     };
//     array.push(record);
//     if(i % 15000 === 0) {
//       upsertMultipleDocuments(array);
//       array = [];
//     }
//   }
// };


const generateRoomInfoData = () => {
  let rows = 'roomId,title,rating,reviewcount,issuperhost,roomPhotos\n';
  for (let i = 1; i <= 10000000; i++) {
    let randomRoomQuery = Math.floor(Math.random() * (12 - 5) + 5);
    const roomUrls = [];
    for (let i = 0; i < randomRoomQuery; i++) {
      const randomPict = Math.floor(Math.random() * 1000);
      roomUrls.push(`https://sdc-pics.s3.amazonaws.com/sdcPic${randomPict}.jpeg`);
    }
    let str = '';
    roomUrls.forEach(url => {
      str = str + url + '\,';
    });
    str = str.substring(0, str.length - 1);
    str = '\"' + str + '\"';
    //console.log(str);
    rows += `${i},${faker.lorem.sentence()},${faker.random.number({'min': 1, 'max': 5})},${faker.random.number({'min': 1, 'max': 10})},${faker.random.arrayElement([true, false])},${str}\n`;
    if ( i % 25000 === 0 ) {
      fs.writeFileSync('roomInfo.csv', rows, {
        flag: 'a'
      });
      rows = '';
    }
  }
};

const generateJSONs = () =>{
  // let array = {}
  for (let i = 1; i <= 3; i++) {
    console.log(i);
    const randomRoomQuery = Math.floor(Math.random() * (12 - 5) + 5);
    const roomUrls = [];
    for (let j = 0; j < randomRoomQuery; j++) {
      const randomPict = Math.floor(Math.random() * 1000);
      roomUrls.push(`https://sdc-pics.s3.amazonaws.com/sdcPic${randomPict}.jpeg`);
    }
    const record = {
      roomId: i,
      title: faker.lorem.sentence(),
      ratings: faker.random.number({'min': 1, 'max': 5}),
      reviewerCount: faker.random.number({'min': 1, 'max': 10}),
      isSuperHost: faker.random.arrayElement([true, false]),
      roomPhotos: roomUrls
    };
    let r = `${JSON.stringify(record)}${i === 3 ? '' : ','}`;
    fs.writeFileSync('sample.json', r, {
      flag: 'a'
    });
    // array.push(record);
  }
};


generateRoomInfoData();
// bulk();
// upsertDocument(record);


// time /Applications/Couchbase\ Server.app/Contents/Resources/couchbase-core/bin/cbimport csv -cluster http://127.0.0.1:8091 -bucket Images -u Administrator -p password -d file://roomInfo.csv -g key::roomId::#MONO_INCR#
// CSV `file://roomInfo.csv` imported to `http://127.0.0.1:8091` successfully
// Documents imported: 10000000 Documents failed: 0

// real	9m39.587s
// user	10m52.958s
// sys	5m15.624s