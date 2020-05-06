const mongoose = require("mongoose"),
    Coach = require("./models/coach"),
    Game = require("./models/game");

coaches = [
    {
        name: "John Doe",
        games: ["Sims 4", "Microsoft Windows Pinball"],
        ratings: [3, 2, 5],
    },
    {
        name: "Juan Dos",
        games: ["Minecraft"],
        ratings: [4, 5, 5],
    },
];

const createdGames = Game.find({}, (err, found) => {
    if (err) {
        console.log("Error retrieving list of games");
        console.log(err);
    } else {
    }
});

var seedCoaches = () => {
    // Remove all coaches
    Coach.remove({}, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("Removed coaches");
            // Add coaches
            coaches.forEach(coach => {
                Coach.create(coach, (err, createdCoach) => {
                    if (err) {
                        console.log(err);
                    } else {
                        createdCoach.games.forEach(game => {
                            Game.find({ name: game }, (err, foundGame) => {
                                if (err) {
                                    console.log("Error finding game");
                                    console.log(err);
                                } else {
                                    foundGame[0].coaches.push(createdCoach);
                                    foundGame[0].save();
                                }
                            });
                        });
                        console.log("Coach " + createdCoach.name + " added");
                    }
                });
            });
        }
    });
};

module.exports = seedCoaches;
