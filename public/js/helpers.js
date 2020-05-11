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

module.exports = { 
    functionInHelper,
    test
};
