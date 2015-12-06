var express = require('express');
var gymRouter = express.Router();

var Gym = require('../models/Gym.js');
var Review = require('../models/Review.js');

reviewRouter.route('/')  // translates to '/api/gyms/
//INDEX -GET ALL POSTS

    //post new review
    .post(function (req, res) {
      Gym.findById(req.params.gym_id, function (err, gym) {
      	Review.create(req.body, function (err, review){
        if (err) console.log(err);
        res.status(201).send(review);
      	});
      });
    })
    //delete review
    .delete(function (req, res) {
      Gym.findById(req.params.gym_id, function (err, gym) {
        if (err) console.log(err);
        gym.review.id(req.params.id).remove();
        gym.save(function (err) {
          if (err) { console.log(err)};
          res.json(gym);
        });
      });
     });

module.exports = reviewRouter;