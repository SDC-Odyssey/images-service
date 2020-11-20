const pg = require('pg');
const path = require('path');

// Declare a constant for the schema name
const schemaName = 'sdc';
// Declare a constant for the Postgres ROLE
const postgresRole = 'me';

const config = {
  user: postgresRole,
  host: 'localhost',
  database: 'oddesey',
  password: 'password',
  port: 5432,
};

// Import data into roomInfo table
const seedroominfo = () => {
  const pool = new pg.Pool(config);
  pool.connect()
    .then(client => {
      return client.query(`ALTER USER me WITH SUPERUSER;
      COPY ${schemaName}.roominfo (title,rating,review_count,is_super_host)
      FROM '${path.join(__dirname, '/../roomInfo.csv')}'
      DELIMITER ',' csv header;`)
        .then(() => {
          client.release();
          console.log('Done loading roomInfo');
        })
        .catch(error => {
          client.release();
          console.log(error);
        });
    }).finally(() => pool.end());

};
// Import data into PhotoURL table
const seedPictureUrls = () => {
  const pool = new pg.Pool(config);
  pool.connect()
    .then(client => {
      return client.query(`ALTER USER me WITH SUPERUSER;
      COPY ${schemaName}.roomPictures (room_id,photo_url)
      FROM '${path.join(__dirname, '/../PhotoURL.csv')}'
      DELIMITER ',' csv header;`)
        .then(res => {
          client.release();
          console.log('Done loading PhotoURLs');
        })
        .catch(error => {
          client.release();
          console.log(error);
        });
    }).finally(() => pool.end());
};
module.exports = { seedroominfo, seedPictureUrls };
