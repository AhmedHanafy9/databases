var db = require('../db');

module.exports = {
  getAll: function (callback) {
    let queryString = 'SELECT * FROM messages';
    db.query(queryString, (error, results) => {
      callback(error, results);
    });
  }, // a function which produces all the messages
  create: function (params, callback) {
    // let queryString = 'INSERT into messages (msg_text, user_id) VALUES (?, select id from users where username = ?)';
    let queryString = `INSERT INTO messages (msg_text, user_id, roomname) VALUES ('${params.message}', (Select id FROM users WHERE username = '${params.username}' limit 1), '${params.roomname}')`;
    db.query(queryString, (error, results) => {
      callback(error, results);
    });
  } // a function which can be used to insert a message into the database
};

