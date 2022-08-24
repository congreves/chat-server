const db = require("../config/db");

async function createMessage({
  message,
  username,
  user_id,
  room_name,
  avatar,
  time,
}) {
  const cli =
    "INSERT INTO messages (message, username, user_id, room_name, avatar, time) VALUES ($1, $2, $3, $4, $5, $6)";
  const result = await db.query(cli, [
    message,
    username,
    user_id,
    room_name,
    avatar,
    time,
  ]);
  return result.rows[0];
}

function getRoomMessages(room_name) {
  const cli = "SELECT * FROM messages WHERE room_name = $1";
  const result = await db.query(cli, [
    room_name,
  ]);
  return result.rows;
}

function deleteRoomMessages(room_name) {
  const cli = "DELETE FROM messages WHERE room_name = $1";
  const result = await db.query(cli, [
    room_name,
  ]);
  return result.rows[0];
}

module.exports = {
  createMessage,
  getRoomMessages,
  deleteRoomMessages,
};
