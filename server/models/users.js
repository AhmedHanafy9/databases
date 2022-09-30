var db = require('../db');

module.exports = {
  getAll: function (cb) {
    let queryString = 'SELECT * from users';
    db.query(queryString, (err, result) => {
      cb(err, results);
    });
  },
  create: function (username, cb) {
    let queryString = `insert INTO users (username) VALUES('${username.username}')`;
    db.query(queryString, username, (error, results) => {
      cb(error, results);
    });
  }
}
;
