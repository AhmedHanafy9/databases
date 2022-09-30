var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.messages.getAll((error, results) => {
      if (error) {
        res.sendStatus(404);
        console.log(error);
      } else {
        res.status(200);
        console.log(results);
        res.json(results);
      }
    });
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    console.log('body', req.body);
    //Call create
    models.messages.create(req.body, (error, results) => {
      if (error) {
        console.log(error);
        res.sendStatus(404);
      } else {
        res.sendStatus(201);
      }
    });
  }
};
