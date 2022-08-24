const { Client } = require("pg");

const db = new Client({
  
  ssl: {
    rejectUnauthorized: false,
  },
  connectionString: 
  process.env.DATABASE_URL,
 });
db.connect(); 

const room = `CREATE TABLE IF NOT EXISTS rooms (id SERIAL PRIMARY KEY, room_name TEXT UNIQUE)`;

const user = `CREATE TABLE IF NOT EXISTS users (id TEXT, username TEXT PRIMARY KEY)`;

const message = `CREATE TABLE IF NOT EXISTS messages (id SERIAL PRIMARY KEY, message TEXT NOT NULL, username TEXT, room_name TEXT, user_id TEXT, time TEXT, avatar TEXT)`;

db.query(room, (error) => {
  if (error) {
    console.error(error.message);
    throw error;
  } else {
    console.log("Rooms table already created");
  }
});

db.query(user, (error) => {
  if (error) {
    console.error(error.message);
    throw error;
  } else {
    console.log("Users table already created");
  }
});

db.query(message, (error) => {
  if (error) {
    console.error(error.message);
    throw error;
  } else {
    console.log("Messages table already created");
  }
});

module.exports = db;
