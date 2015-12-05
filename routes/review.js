var express = require('express');
var gymRouter = express.Router();

var Gym = require('../models/gym.js');

gymRouter.route('/')  // translates to '/api/posts/'
//INDEX -GET ALL POSTS