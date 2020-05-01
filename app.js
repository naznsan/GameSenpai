const   express = require("express"),
        app = express();


// App Config
app.set("view engine", "ejs");


// Routes
app.get("/", (req, res) => {
    res.render("landing");
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("GameSenpai server up and running!");
});
