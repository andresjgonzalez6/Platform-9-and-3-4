var db = require("../models");
// require('dotenv').config();
// let recipe_APP_ID = process.env.Recipe_APP_ID;
// let recipe_APP_KEY = process.env.Recipe_APP_KEY;
// let nutrition_APP_ID = process.env.Nutrition_APP_ID;
// let nutrition_APP_KEY = process.env.Nutrition_APP_KEY;
// let foodDB_APP_ID = process.env.FoodDB_APP_ID;
// let foodDB_APP_KEY = process.env.FoodDB_APP_KEY;
module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
