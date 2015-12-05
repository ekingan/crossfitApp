var express = require('express');
var gymRouter = express.Router();

var Gym = require('../models/Gym.js');
var Review = require('../models/Review.js');

gymRouter.route('/')  // translates to '/api/gyms/'
//INDEX -GET ALL POSTS
  // send all gyms
  .get(function(request, response){
    //INDEX -GET ALL gyms
      Gym.find().sort('name').exec(function(err, gyms) {
      if (err) { return response.status(404).send(err); }
      response.send(gyms); 
    });    
  })
  // create new gym
  .post(function (req,res){  
    console.log("the post newGym",req.body);
    Gym.create({req.body}, function (err, gym){
      if (err) { 
        return res.send(err); }
      console.log(gym);
      res.status(201).send(gym);
    });
  });
 // });

gymRouter.route('/:gym_id')   // translates to '/api/gym/:gym_id'
  // send one gym by id
  .get(function (req,res){   
    Gym.findById(req.params.gym_id, function(err, gym) {
      if (err) { return res.status(404).send(err); }
      res.send(gym); 
    });
  })

  // full update of one gym by id
  .put(function (req,res){ 
    Gym.findOneAndUpdate({ _id: req.params.gym_id}, req.body, function (err, gym) {
      if (err) { return res.send(err); }
      res.send(gym);
    });
  })

  // delete one gym by id
  .delete(function (req,res){   
    Gym.findByIdAndRemove(req.params.gym_id, function (err, gym) {
      if (err) { return res.send(err); }
      res.status(200).send('Success');
    });
  })
//REVIEW ROUTES
    //post new review
    .post(function (req, res) {
      Gym.findById(req.params.gym_id, function (err, review) {
        if (err) console.log(err);
        res.status(201).send(gym.review);
      });
    })
    //delete review
    .delete(function (req, res) {
      Gym.findById(req.paramas.gym_id, function (err, review) {
        if (err) console.log(err);
        gym.review.id(req.params.id).remove();
        gym.save(function (err) {
          if (err) { console.log(err)};
          res.json(gym);
        });
      });
    });


    

module.exports = gymRouter;