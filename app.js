const express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    Coach = require("./models/coach"),
    Game = require("./models/game"),
    seedGames = require("./seedGames"),
    seedCoaches = require("./seedCoaches");

// Mongoose Config
mongoose
    .connect(
        "mongodb+srv://GameSenpaiAdmin:JT2j8lQTrIbJtHVu@gamesenpai-sugng.mongodb.net/test?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(console.log("Database Connected"));

// App Config
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

seedGames();
seedCoaches();

const helper = require("./public/js/helpers");

// Routes
// Landing
app.get("/", (req, res) => {
    res.render("landing");
});

// Games List
app.get("/games", (req, res) => {
    // Get all games
    Game.find({}, (err, allGames) => {
        if (err) console.log(err);
        else res.render("games", { helper: helper, games: allGames });
    });
});

// Game Show
app.get("/games/:title", (req, res) => {
    //to edit req.params.title to correct format
    const title = req.params.title.replace(/-/g, ' ').replace(/\b\w/g, function(c) {
        return c.toUpperCase();
    });
    //find game that matches title
    Game.find({name: title}, (err, game) => {
        if (err) console.log(err);
        //find coaches for the game
        else Coach.find({_id: game[0].coaches}, (err, allCoaches) => {
            if (err) console.log(err);
            else res.render("showGame", { helper: helper, coaches: allCoaches, game: game });
        });
    });
});

// Coaches List
app.get("/coaches", (req, res) => {
    // Get all coaches
    Coach.find({}, (err, allCoaches) => {
        if (err) console.log(err);
        else res.render("coaches", { helper: helper, coaches: allCoaches });
    });
});

// Coach show
app.get("/coach/:id", (req, res) => {
    //find coach that matches id
    Coach.find({_id: req.params.id}, (err, coach) => {
        if (err) console.log(err);
        else res.render("showCoach", { helper: helper, coach: coach });
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("GameSenpai server up and running!");
});
