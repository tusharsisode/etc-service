//Initialize Express Router
const routes = require('express').Router();
const etc = require('./etc');

//Route for etc
routes.use('/etc', etc);

//Base route
routes.get('/', (req, res) => {
  res.status(200).json({ message: 'ETC Server is Connected!' });
});

//Export routes to be used in other module
module.exports = routes;