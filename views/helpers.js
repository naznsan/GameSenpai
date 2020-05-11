exports = module.exports = {};
exports.iff = function(c) {
    console.log("c");
}

var helper = require('./helper.js');
ejs.render(ejstxt,{ helpers : helpers });