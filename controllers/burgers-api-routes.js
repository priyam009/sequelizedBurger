var db = require('../models');

module.exports = function(app) {
  app.get('/api/posts', function(req, res) {
    db.Burger.findAll({}).then(function(result) {
      return res.json(result);
    });
  });

  app.post('/api/posts', function(req, res) {
    db.Burger.create(req.body).then(function(result) {
      return res.json(result);
    });
  });

  app.put('/api/posts', function(req, res) {
    db.Burger.update(req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(result) {
        return res.json(result);
    });
  });

  app.delete('/api/posts/:id', function(req,res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(result) {
      return res.json(result);
    });
  });
};