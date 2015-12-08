
//OLD VERSION 
var express = require('express');
var reviewRouter = express.Router();

var Gym = require('../models/Gym.js');
var Review = require('../models/Review.js');

//   // translates to '/api/gyms/:gym_id
//INDEX -GET ALL Reviews
		//get reviews
		// .get(function (req, res){
  //     Gym.findById(req.params.gym_id, function(err, gym) {
  //     if (err) { 
  //       return res.status(404).send(err); 
  //     }
  //     console.log("gym here", gym);
  //     res.send(gym); 
  //   });
  // });
   


// module.exports = reviewRouter;


//new version
//var express = require('express');
// var Gym = require('../models/Gym.js');
// var Review = require('../models/Review.js');

// module.exports = function(app) {
  
//   // GET ALL REVIEWS
//   app.get('/api/gyms/:gym_id', function (req, res) {
//     Gym.findById(req.params.gym_id, function (err, gym) {
//       if (err) { 
//         return res.status(404).send(err); 
//       }
//       console.log("gym here", gym);
//       res.send(gym); 
//     });
//   });

//   // CREATE
//   app.post('/api/gyms/:gym_id/reviews', function (req,res) {
//     var review = new Review(req.body);
//     console.log("review: ", review);
//     Gym.findById(req.params.gym_id, function (err, gym) {
//       if (err) { 
//         return res.status(404).send(err); 
//       }
//       gym.reviews.push(review);
//       console.log("gym after push: ", gym.reviews);
//       gym.save(function (err, gym) {
//         if (err) { 
//           return res.send(err); 
//         }
//         res.send(review);
//       });
//     });
//   });

//   // DELETE
//   app.delete('/api/gyms/:gym_id/reviews/:review_id', function (req, res) {
//   // set the value of the gym and review ids
//   var gymId = req.params.gym_id;
//   var reviewId = req.params.review_id;
//   console.log("gymID and reviewId", gymId, reviewId);

//   // find idea by id
//   Gym.findOne({_id: gymId}, function (err, gym) {
//     // find review embedded in idea
//     var review = gym.reviews.id(reviewId);
//     // remove review
//     review.remove();
//     gym.save(function (err, savedGym) {
//       res.json(review);
//     });
//   });
// });
// };

