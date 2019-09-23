var db = require('../models');

module.exports = function(app) {
  app.get('/', function(req, res) {
    db.Burgers.findAll({}).then(function(result) {
      //Empty array to store refined results
      var burgers = [];

      //Get burgers values from result array
      for(var i=0; i<result.length; i++) {
        var burger = {
          id: result[i].dataValues.id,
          burger_name: result[i].dataValues.burger_name,
          devoured: result[i].dataValues.devoured,
        }
        burgers.push(burger);
      };
      
      //Render index.handlebars using response
      res.render('index', { burgers:burgers });
    });
  });
}