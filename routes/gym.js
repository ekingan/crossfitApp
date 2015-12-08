// OLD CODE V1
var express = require('express');
var gymRouter = express.Router();

var Gym = require('../models/Gym.js');
var Review = require('../models/Review.js');

gymRouter.route('/')  // translates to '/api/gyms/'
//INDEX -GET ALL POSTS
  // send all gyms
  .get(function(request, response){
    //INDEX -GET ALL gyms
      Gym.find().sort('name').populate('reviews').exec(function(err, gyms) {
      if (err) { return response.status(404).send(err); }
      response.send(gyms); 
    });    
  })
  // create new gym
  .post(function (req,res){  
    console.log("the post newGym",req.body);
    Gym.create(req.body, function (err, gym){
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
  }); 

gymRouter.route('/:gym_id/reviews') // translates to '/api/gyms/:gym_id/reviews
    //post new review
    .post(function (req, res) {
        //look up Gym id
      var gymId = req.params.gym_id;
      console.log("gymId", gymId);
      //set review equal to form input
      var newReview = new Review(req.body);
      Gym.findById(gymId, function (err, foundGym) {
        foundGym.reviews.unshift(newReview);
        foundGym.save(function (err, savedGym) {
          console.log('err', err);
          res.json(newReview);
        });
      });
    });


    //   Gym.findById(req.params.gym_id, function (err, gym) {
    //    Review.create(req.body, function (err, review){
    //     if (err) console.log(err);
    //     res.status(201).send(review);
    //    });
    //   });
    // })
gymRouter.route(':gym_id/reviews/:review_id')
    //delete review
    .delete(function (req, res) {
      // set the value of the gym and review ids
      var gymId = req.params.gym_id;
      var reviewId = req.params.review_id;
       console.log("gymID and reviewId", gymId, reviewId);
        // find idea by id
        Gym.findById(req.params.gym_id, function (err, gym) {
        if (err) { 
          return res.status(404).send(err); 
        }
        gym.reviews.push(review);
        console.log("gym after push: ", gym.reviews);
        gym.save(function (err, gym) {
          if (err) { 
            return res.send(err); 
          }
          res.send(review);
        });
      });
       
});
 module.exports = gymRouter;

// var express = require('express');
// var Idea = require('../models/Gym.js');

// module.exports = function(app) {
  
//   // GET ALL GYMS
//   app.get('/api/gyms', function (req, res){
//     Gym.find().sort('-created_at').exec(function (err, gyms) {
//       if (err) { 
//         return res.status(404).send(err); 
//       }
//       res.send(gyms); 
//     });    
//   });

//   // CREATE
//   app.post('/api/gyms', function (req,res){  
//     var gym = new Gym({ content: req.body.content });
//     gym.save(function (err, gym) {
//       Gym.create(req.body, function (err, gym){
//         if (err) { 
//           return res.send(err); 
//         }
//         console.log(idea);
//         res.status(201).send(gym);
//       });
//     });
//   });

//   // GET ONE GYM
//   app.get('/api/gyms/:gym_id',function (req,res){   
//     Gym.findById(req.params.gym_id, function (err, gym) {
//       if (err) { 
//         return res.status(404).send(err); 
//       }
//       res.send(gym); 
//     });
//   });

//   // UPDATE ONE GYM
//   app.put('/api/gyms/:gym_id', function (req,res){ 
//     Gym.findOneAndUpdate({ _id: req.params.gym_id}, req.query.gym, function (err, gym) {
//       if (err) { 
//         return res.send(err); 
//       }
//       res.send(gym);
//     });
//   });

//   // DELETE ONE GYM
//   app.delete('/api/gyms/:gym_id', function (req,res){   
//     Gym.findByIdAndRemove(req.params.gym_id, function (err, gym) {
//       if (err) { 
//         return res.send(err); 
//       }
//       res.status(200).send('Success');
//     });
//   });
// };



// //REVIEW ROUTES
// //move into review.js file



    

