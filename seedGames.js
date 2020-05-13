const mongoose = require("mongoose"),
    Coach = require("./models/coach"),
    Game = require("./models/game");

games = [
    {
        name: "Sims 4",
        description: "The most hardcore real-life simulator.",
        image: "https://imgur.com/O3AOhL7",
    },
    {
        name: "Minecraft",
        description: "Hack and Slash your way to the End.",
        image: "https://imgur.com/dSq78XX",
    },
    {
        name: "Microsoft Windows Pinball",
        description: "Feel the intensity in this global favorite.",
        image: "https://imgur.com/dgKtVJD",
    },
    {
        name: "Minesweeper",
        description: "Put the matter of life and death in your own hands.",
        image: "https://imgur.com/eZTjiFR",
    },
    {
        name: "Microsoft Solitaire",
        description: "Klondike is the only real Solitaire.",
        image: "https://imgur.com/20RfqfB",
    },
    {
        name: "Club Penguin",
        description: "F",
        image: "https://imgur.com/MGPXiY1",
    },
    {
        name: "Roblox Counter Blox",
        description: "Like CS:GO, but edgier... because it's made of blocks.",
        image: "https://imgur.com/Ta2GvzF",
    },
    {
        name: "Farming Simulator 2008",
        description: "Feel the rumble of the 300 horsepower engine.",
        image: "https://imgur.com/7rf14xl",
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
