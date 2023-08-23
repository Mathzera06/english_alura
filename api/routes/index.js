const bodyParser = require('body-parser');
const people = require("./peopleRoute.js");
const level = require("./levelRoute");
const classes = require("./classesRoute");

module.exports = app => {
    app.use(
        bodyParser.json(),
        people,
        level,
        classes
    );
}