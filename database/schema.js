const pg = require("pg");

// Declare a constant for the schema name
const schemaName = "sdc";

// Declare a constant for the Postgres ROLE
const postgresRole = "me";

var config = {
  user: postgresRole,
  host: 'localhost',
  database: 'oddesey',
  password: 'password',
  port: 5432,
};

async function schemaFuncs() {
  const pool = new pg.Pool(config);
  // Create the SCHEMA with user auth if it doesn't exist
  pool.connect()
    .then(client => {
      return client.query(`CREATE SCHEMA IF NOT EXISTS
      ${schemaName} AUTHORIZATION ${postgresRole};`)
        .then(res => {
          client.release();
          console.log('Schema created')
        })
        .catch(error => {
          client.release();
          console.log(error);
        })
    }).finally(() => pool.end());
};

async function createRoomInfoTable() {
  const pool = new pg.Pool(config);
  let createTableSql = 
  `DROP TABLE IF EXISTS ${schemaName}.roomInfo;
  DROP TABLE IF EXISTS ${schemaName}.roomPictures;
  CREATE TABLE ${schemaName}.roomInfo(
    roomId INT primary key,
    title TEXT,
    rating INT,
    reviewCount INT,
    isSuperHost BOOLEAN );
  CREATE TABLE ${schemaName}.roomPictures(
    photoId INT primary key,
    roomId INT,
    photoURL TEXT,
    CONSTRAINT roomId
      FOREIGN KEY(roomId) 
        REFERENCES ${schemaName}.roomInfo(roomId)
  );
  `;

  pool.connect()
    .then(client => {
      return client.query(createTableSql)
        .then(res => {
          client.release();
          console.log('table created')
        })
        .catch(error => {
          client.release();
          console.log(error);
        })
    }).finally(() => pool.end());

}

schemaFuncs();
createRoomInfoTable();