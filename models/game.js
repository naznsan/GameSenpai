const mongoose = require("mongoose");

var gameSchema = new mongoose.Schema({
    name: String,
    description: String,
    coaches: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Coach"
        }
    ]
});

module.exports = mongoose.model("Game", gameSchema);