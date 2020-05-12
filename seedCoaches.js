const mongoose = require("mongoose"),
    Coach = require("./models/coach"),
    Game = require("./models/game");

coaches = [
    {
        name: "John Doe",
        games: ["Sims 4", "Microsoft Windows Pinball"],
        ratings: [3, 2, 5],
        image: "https://imgur.com/QGJVB5z",
    },
    {
        name: "Juan Dos",
        games: ["Minecraft", "Minesweeper"],
        ratings: [4, 5, 5],
        image: "https://imgur.com/6r5XnLX",
    },
    {
        name: "Dominique 'The Dominator' Mallard",
        games: ["Minesweeper"],
        ratings: [2, 3],
        image: "https://imgur.com/V4LsFzz",
    },
    {
        name: "Mimi Mei",
        games: ["Microsoft Solitaire", "Microsoft Windows Pinball"],
        ratings: [5, 4, 5],
        image: "https://imgur.com/pQeRqmt",
    },
    {
        name: "Carlo 'The Wise' Knower",
        games: ["Club Penguin"],
        ratings: [3, 4, 5],
        image: "https://imgur.com/DZKgztQ",
    },
    {
        name: "Julianne Shird III",
        games: ["Roblox Counter Blox", "Sims 4"],
        ratings: [2, 4, 4],
        image: "https://imgur.com/z43LCQd",
    },
    {
        name: "Eugenio 'Bento' Vento",
        games: ["Farming Simulator 2008", "Club Penguin"],
        ratings: [5, 3, 2],
        image: "https://imgur.com/E4rwxXd",
    },
];

// const createdGames = Game.find({}, (err, found) => {
//     if (err) {
//         console.log("Error retrieving list of games");
//         console.log(err);
//     } else {
//     }
// });

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
