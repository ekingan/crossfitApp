/*
 * DATABASE CONFIG
 */

var config    = require('./config'),
    mongoose  = require('mongoose');

module.exports = function() {
  var db = mongoose.connect(config.db);
  require('./models/post');
  
  return db;
};