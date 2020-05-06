const mongoose = require("mongoose"),
    Coach = require("./models/coach"),
    Game = require("./models/game");

games = [
    {
        name: "Sims 4",
        description: "The most hardcore real-life simulator.",
    },
    {
        name: "Minecraft",
        description: "Hack and Slash your way to the End.",
    },
    {
        name: "Microsoft Windows Pinball",
        description: "Feel the intensity in this global favorite.",
    },
    {
        name: "Minesweeper",
        description: "Put the matter of life and death in your own hands.",
    },
];

var seedGames = () => {
    // Remove all games
    Game.remove({}, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Removed games");
            // Add games
            games.forEach(seed => {
                Game.create(seed, (err, createdGame) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log("Game created");
                    }
                });
            });
        }
    });
};

module.exports = seedGames;
