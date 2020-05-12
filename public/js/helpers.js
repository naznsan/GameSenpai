// exports = module.exports = {};
// exports.iff = function(c) {
//     console.log("c");
// }

const functionInHelper = input => {
    console.log("THIS IS BEING PRINTED FROM HELPER");
    console.log(input);
};

function test(str) {
    console.log(str);
}

function filter(item) {
    //clearing .active from btn
    btns = document.getElementsByClassName("btn");
    for (let btn of btns) {
        btn.classList.remove("active");
    }
    document.getElementsByClassName("btn " + item)[0].classList.add("active");
    var coachDiv = document.getElementsByClassName("coach");
    if (item == "none") {
        item = "coach";
    }
    for (var i = 0; i < coachDiv.length; i++) {
        if (coachDiv[i].classList.contains(item)) {
            coachDiv[i].classList.remove("fadeOut");
            coachDiv[i].classList.remove("hide");
        } else {
            coachDiv[i].classList.add("fadeOut");
            coachDiv[i].classList.add("hide");
        }
    }
}

module.exports = { 
    functionInHelper,
    test,
    filter
};
