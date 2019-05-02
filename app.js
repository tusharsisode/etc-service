//Initialize Express Application and bring in dependencies
var express = require("express");
var cors = require('cors');
var app = express();
const routes = require('./routes');

app.use(cors());

//Connect all routes to the application
app.use('/', routes);

//Turn on the server and listen on port 9091
app.listen(9091, () => {
 console.log("Express server running on port 9091");
});