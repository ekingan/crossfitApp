/*
 * INDEX RESOURCES
 */

exports.index = function(req, res){
  res.render('index');
};

exports.templates = function (req, res) {
  var name = req.params.name;
  res.render('templates/' + name);
};

exports.gymRouter =  require('./gym.js');
exports.reviewRouter = require('./review.js');