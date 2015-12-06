var express = require('express');
var reviewRouter = express.Router();

var Review = require('../models/review.js');

reviewRouter.route('/')  // translates to '/api/reviews	
//INDEX -GET ALL POSTS

    //post new review
    // .post(function (req, res) {
    //   Gym.findById(req.params.gym_id, function (err, review) {
    //     if (err) console.log(err);
    //     res.status(201).send(gym.review);
    //   });
    // })
    // //delete review
    // .delete(function (req, res) {
    //   Gym.findById(req.paramas.gym_id, function (err, review) {
    //     if (err) console.log(err);
    //     gym.review.id(req.params.id).remove();
    //     gym.save(function (err) {
    //       if (err) { console.log(err)};
    //       res.json(gym);
    //     });
    //   });
    // });