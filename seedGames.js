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
    {
        name: "Microsoft Solitaire",
        description: "Klondike is the only real Solitaire.",
    },
    {
        name: "Club Penguin",
        description: "F",
    },
    {
        name: "Roblox Counter Blox",
        description: "Like CS:GO, but edgier... because it's made of blocks.",
    },
    {
        name: "Farming Simulator 2008",
        description: "Feel the rumble of the 300 horsepower engine.",
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
