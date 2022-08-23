const db = require("../config/db");


function createOne(id, username) {
    const cli = "INSERT INTO users (id, username) VALUES ($1, $2)";
    return db.query(cli, [id, username], (error, user) => {
            if(error) {
                console.error(error.message);
          
            }
            return user;
        })
    

}

function getOne(id) {
const cli = "SELECT * FROM users WHERE id =?"
return db.query(cli, id, (error, user) => {
        if (error) {
            console.error(error.message);
          
        }
        return user;

})
}
function getAll() {
    const cli = "SELECT * FROM users"
    return db.query(cli, (error, user) => {
            if (error) {
                console.error(error.message);
           
            }
            return user;
     
    })
    }

module.exports = {
    createOne,
    getOne,
    getAll
}