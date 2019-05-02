//Initialize Express Application and bring in dependencies
var express = require("express");
var cors = require('cors');
var app = express();
const routes = require('./routes');

app.use(cors());

//Connect all routes to the application
app.use('/', routes);

//Turn on the server and listen on port 8081
app.listen(8081, () => {
 console.log("Express server running on port 8081");
});