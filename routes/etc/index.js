const etcs = require('express').Router();
const etc = require('./etc');

etcs.get('/', etc);

module.exports = etcs;