const   mongoose = require("mongoose"),
        Coach = require("./models/coach"),
        Game = require("./models/game");

games = [
    {
        name: "Sims 4",
        description: "The most hardcore real-life simulator."
    },
    {
        name: "Minecraft",
        description: "Hack and Slash your way to the End."
    },
    {
        name: "Microsoft Windows Pinball",
        description: "Feel the intensity in this global favorite."
    }
];

var seedDb = () => {
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
                        // Add coach
                        Coach.create(
                            {
                                name: "John Doe",
                                games: ["Sims 4", "Minecraft", "Microsoft Windows Pinball"],
                                ratings: [2, 3, 4, 1, 5]
                            }, (err, createdCoach) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    createdGame.coaches.push(createdCoach);
                                    createdGame.save();
                                    console.log("Created new game");
                                }
                            }
                        );
                    }
                });
            });
        }       
    });
}

module.exports = seedDb;