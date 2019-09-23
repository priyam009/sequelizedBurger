//Express
var express = require('express');
var path = require('path');

//Set Port
var PORT = process.env.PORT || 3000;

//Initialise express
var app = express();

//Require models
var db = require('./models');

//Static directory
app.use(express.static(path.join(__dirname, '/public')));

//Parse
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

//Express handlebars
var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars")

require("./controllers/burgers-api-routes")(app);

//Start server
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("Server listening on https://localhost:" + PORT);
  });
});