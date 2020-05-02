const   express = require("express"),
        app = express(),
        mongoose = require("mongoose");


// App Config
app.set("view engine", "ejs");

// Mongoose Config
mongoose.connect("mongodb+srv://GameSenpaiAdmin:JT2j8lQTrIbJtHVu@gamesenpai-sugng.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("Database Connected"));


// Routes
app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/game/:title", (req, res) => {
    res.render("game");
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("GameSenpai server up and running!");
});
