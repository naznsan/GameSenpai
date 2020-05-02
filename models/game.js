const mongoose = require("mongoose");

var gameSchema = new mongoose.Schema({
    name: String,
    description: String,
    coaches: [String]
});

module.exports = mongoose.model("Game", gameSchema);