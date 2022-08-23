const db = require("../config/db");

function createMessage({ message, username, user_id, room_name, avatar, time }) {
  const cli = "INSERT INTO messages (message, username, user_id, room_name, avatar, time) VALUES ($1, $2, $3, $4, $5, $6)";
  return db.query(cli, [message, username, user_id, room_name, avatar, time], (error) => {
      if (error) {
        console.error(error.message);
       
      }
      return ;

  });
}

function getRoomMessages(room_name) {
  const cli = "SELECT * FROM messages WHERE room_name =?";
  return db.query(cli, room_name, (error, room) => {
      if (error) {
        console.error(error.message);
      
      }
      return room;

  });
}


function deleteRoomMessages(room_name) {
  const cli = "DELETE FROM messages WHERE room_name = ?";
  return db.query(cli, room_name, (error, room) => {
      if (error) {
        console.error(error.message);
    
      }
      return room;

  });
}

module.exports = {
  createMessage,
  getRoomMessages,
  deleteRoomMessages,
};
