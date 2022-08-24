const db = require("../config/db");

async function createOne(id, username) {
  const cli = "INSERT INTO users (id, username) VALUES ($1, $2)";
  const result = await db.query(cli, [
    id,
    username,
  ]);
  return result.rows;
}

async function getOne(id) {
  const cli = "SELECT * FROM users WHERE id = $1";
  const result = await db.query(cli, [
  id,
  ]);
  return result.rows[0];
}
async function getAll() {
  const cli = "SELECT * FROM users";
  const result = await db.query(cli, [
  ]);
  return result.rows;
}

module.exports = {
  createOne,
  getOne,
  getAll,
};
