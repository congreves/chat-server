const db = require("../config/db");

async function createOne(name) {
  const cli = "INSERT INTO rooms (room_name) VALUES ($1)";
  const result = await db.query(cli, [name]);
  return result.rows[0];
}

async function getOne(id) {
  const cli = "SELECT * FROM rooms WHERE id = $1";
  const result = await db.query(cli, [id]);
  return result.rows[0];
}

async function getAll() {
  const cli = "SELECT * FROM rooms";
  const result = await db.query(cli, []);
  return result.rows;
}

async function deleteOne(room_name) {
  const cli = "DELETE FROM rooms WHERE room_name = $1";
  const result = await db.query(cli, [room_name]);
  return result.rows[0];
}

module.exports = {
  createOne,
  getOne,
  getAll,
  deleteOne,
};
