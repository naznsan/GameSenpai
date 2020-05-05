const express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    Coach = require("./models/coach"),
    Game = require("./models/game"),
    seedDb = require("./seed");


// Mongoose Config
mongoose.connect("mongodb+srv://GameSenpaiAdmin:JT2j8lQTrIbJtHVu@gamesenpai-sugng.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    console.log("Database Connected"));

// App Config
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

seedDb();


// Routes
app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/game/:title", (req, res) => {
    res.render("game");
});

app.get("/coach/:id", (req, res) => {
    res.render("coach");
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("GameSenpai server up and running!");
});
