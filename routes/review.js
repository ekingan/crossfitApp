var express = require('express');
var reviewRouter = express.Router();

var Review = require('../models/review.js');

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