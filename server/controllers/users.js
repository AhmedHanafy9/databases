var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll((error, results) => {
      if (error) {
        res.sendStatus(404);
        console.log(error);
      } else {
        res.sendStatus(200);
        res.json(results);
      }
    });
  },
  post: function (req, res) {
    models.users.create(req.body, (error, results) => {
      if (error) {
        console.log(error);
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    });
  }
};
