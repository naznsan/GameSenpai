const mongoose = require("mongoose");

var coachSchema = new mongoose.Schema({
    name: String,
    games: [String],
    ratings: [Number],
    image: {type: String, default: null}
});

module.exports = mongoose.model("Coach", coachSchema);