const express = require("express");
const router = express.Router();

const Plant = require("../models/model");

router.get("/", (req, res) => {
  Plant.find()
    .sort({ Created_date: -1 })
    .select("-__v")
    .then(plants => res.json(plants));
});

router.post("/", (req, res) => {
  const newPlant = new Plant({
    Moisture: req.body.Moisture,
    Temperature: req.body.Temperature,
    Light: req.body.Light
  });
  newPlant.save().then(plant => res.json(plant));
});

module.exports = router;
