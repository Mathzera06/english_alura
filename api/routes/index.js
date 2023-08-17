const bodyParser = require('body-parser');
const people = require("./peopleRoute.js")

module.exports = app => {
    app.use(bodyParser.json());
    app.use(people);
}