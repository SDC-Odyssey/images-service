const pg = require('pg');

// Declare a constant for the schema name
const schemaName = 'sdc';

// Declare a constant for the Postgres ROLE
const postgresRole = 'me';

var config = {
  user: postgresRole,
  host: 'localhost',
  database: 'oddesey',
  password: 'password',
  port: 5432,
};

// get all records from DB
const getRecords = (roomIdRequest)=> {
  const pool = new pg.Pool(config);
  pool.connect()
    .then(client => {
      return client.query(`select * from ${schemaName}.roomInfo;`)
        .then(res => {
          client.release();
          console.log('-----',res.rows);
        })
        .catch(error => {
          client.release();
          console.log(error);
        });
    }).finally(() => pool.end());
};

// Create the SCHEMA with user me if it doesn't exist
const createSchemaAndTables = () => {
  const pool = new pg.Pool(config);
  pool.connect()
    .then(client => {
      return client.query(`
      CREATE SCHEMA IF NOT EXISTS
      ${schemaName} AUTHORIZATION ${postgresRole};
      DROP TABLE IF EXISTS ${schemaName}.roomInfo cascade; 
      DROP TABLE IF EXISTS ${schemaName}.roomPictures cascade;
      CREATE TABLE ${schemaName}.roomInfo(
        room_id SERIAL PRIMARY KEY,
        title TEXT,
        rating INT,
        review_count INT,
        is_super_host BOOLEAN );
      CREATE TABLE ${schemaName}.roomPictures(
        photo_id SERIAL PRIMARY KEY,
        room_id INT,
        photo_url TEXT
      );`)
        .then(() => {
          client.release();
          console.log('Schema created');
        })
        .catch(error => {
          client.release();
          console.log(error);
        });
    }).finally(() => pool.end());
};

createSchemaAndTables();
// getRecords(1);