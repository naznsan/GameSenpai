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

function openSide() {
    document.getElementById("mySidebar").style.width = "100%";
    document.getElementById("mySidebar").style.height = "100%";
    document.getElementById("mySidebar").style.position = "fixed";
    document.getElementById("mySidebar").style.zIndex = "1";
    document.getElementById("mySidebar").style.top = "0";
    document.getElementById("mySidebar").style.left = "0";
    document.getElementById("mySidebar").style.margin= "0";
    document.getElementById("mySidebar").style.display = "inline";
}

function closeSide() {
    if (screen.width <= 500) {
        document.getElementById("mySidebar").style.display = "none";
    }
}

module.exports = { 
    functionInHelper,
    test,
    filter
};
