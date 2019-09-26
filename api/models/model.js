var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PlantSchema = new Schema({
  Created_date: {
    type: Date,
    default: Date.now
  },
  Moisture: {
    type: Number,
    required: true
  },
  Temperature: {
    type: Number,
    required: true
  },
  Light: {
    type: Number,
    required: true
  }
});

module.exports = Plant = mongoose.model("Plant", PlantSchema);
