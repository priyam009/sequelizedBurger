var db = require('../models');

module.exports = function(app) {
  app.get('/api/burgers', function(req, res) {
    db.Burgers.findAll({}).then(function(result) {
      return res.json(result);
    });
  });

  app.post('/api/burgers', function(req, res) {
    db.Burgers.create(req.body).then(function(result) {
      return res.json(result);
    });
  });

  app.put('/api/burgers', function(req, res) {
    var devour = {
      devoured: req.body.devoured
    }
    db.Burgers.update(devour,
      {
        where: {
          id: req.body.id
        }
      }).then(function(result) {
        return res.json(result);
    });
  });

  app.delete('/api/burgers/:id', function(req, res) {
    db.Burgers.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      return res.json(result);
    });
  });
};