const db = require("../models");
const sequelize = require("sequelize");
const Op = Sequelize.Op;
const moment = require("moment");

module.exports = function(app) {
  app.post("/api/newHabit", function(req, res) {
    console.log("Habit Data:");
    console.log(req.body);
    Habit.create({
      name: req.body.name,
      time: req.body.time,
      frequency: req.body.frequency,
      comments: req.body.comments
    }).then(function(results) {
      res.json(results);
    });
  });

  app.get("/api/habits", function(req, res) {});

  app.get("/api/habits/:id", function(req, res) {});

  app.update("/api/habits/:id", function(req, res) {});

  app.delete("/api/habits/:id", function(req, res) {
    console.log("Habit ID:");
    console.log(req);
  });
};
