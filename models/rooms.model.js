const db = require("../config/db");


function createOne(name) {
  const cli = "INSERT INTO rooms (room_name) VALUES (?)";
  return db.query(cli, name, (error) => {
      if (error) {
        console.error(error.message);
      
      }
      return name;
 
  });
}

function getOne(id) {
  const cli = "SELECT * FROM rooms WHERE id = ?";
  return db.query(cli, id, (error, room) => {
      if (error) {
        console.error(error.message);
        
      }
      return room;
  
  });
}

function getAll() {
  const cli = "SELECT * FROM rooms";
  return db.query(cli, (error, room) => {
      if (error) {
        console.error(error.message);
       
      }
      return room;

  });
}

function deleteOne(room_name) {
  const cli = "DELETE FROM rooms WHERE room_name = ?";
  return db.query(cli, room_name, (error) => {
      if (error) {
        console.error(error.message);
      
      }
      return room_name;
 
  });
}

module.exports = {
  createOne,
  getOne,
  getAll,
  deleteOne
};
