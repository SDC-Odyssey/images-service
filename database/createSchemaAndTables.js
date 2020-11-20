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
// psql -h localhost -p 5432 -U me -d oddesey
// bash-4.2$ psql -h 127.0. 0.1 -p <port number of remote machine> -d <database name which you want to connect> -U <username of the database server>
// CREATE DATABASE localhost WITH OWNER me;
// ALTER USER me WITH PASSWORD 'password';
// sudo -i -u postgres

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
      // CREATE INDEX info
      // ON sdc.roomInfo (room_id);
      // CREATE INDEX pic
      //   ON sdc.roompictures (room_id);
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


// SELECT * FROM pg_indexes WHERE schemaname = 'sdc';

// ec2-100-26-241-115.compute-1.amazonaws.com

const sql = `select s.title,s.rating, s.review_count, s.is_super_host, r.photo_url from sdc.roominfo s, sdc.roompictures r where s.room_id = r.room_id and s.room_id = ${id}`;
  