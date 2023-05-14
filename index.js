const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var path = require('path');
var db = require('./databse/db.js');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res, next) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/api/v1/students', db.findAll);
app.post('/api/v1/students', db.create);


app.listen(port, () => { console.log("application is listening on port " + port) });
module.exports = app;
