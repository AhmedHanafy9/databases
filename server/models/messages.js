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
    let queryString = `INSERT into messages (msg_text, user_id, roomname) VALUES ('${params.message}', (select id from users where username = '${params.username}'), '${params.roomname}')`;
    db.query(queryString, params, (error, results) => {
      callback(error, results);
    });
  } // a function which can be used to insert a message into the database
};
