/*
 * CONTROLLERS
 */

'use strict';

angular.module('crossfitApp').controller('GymIndexCtrl',function($scope, Gym, $stateParams) {

  
    //query() returns ALL THE GYMS
    $scope.allGyms = Gym.query(function(data) {
    }); 

    //EDIT GYM
    $scope.editGym = function(gym) {
      Gym.update({id: gym._id}, gym, function(data) {
        gym.editForm = false;
        
      });
    };

    // DELETE GYM
    $scope.deleteGym = function (gym, $index) {
      Gym.delete({id: gym._id}, gym, function (data) {
      $scope.gym = gym;
      $scope.allGyms.splice($index, 1);
      });
    };

    // add a new gym
    $scope.createGym = function() { 
      if ($scope.newGym) {
        Gym.save($scope.newGym, function (data) {
        $scope.allGyms.push(data);
        });
        $scope.newGym = {};
        
      }
    };
  });

angular.module('crossfitApp').controller('GymShowCtrl',function($scope, $stateParams,
                                                                Review, Gym ) {
//gets gyms by ID for Show page
  Gym.get({ id: $stateParams.gym_id}, function(data) {
    $scope.gym = data;

  });
 //get reviews through gyms
  Gym.get({ id: $stateParams.gym_id }, function(data) {
      console.log("get request", data);
      var reviews = data.reviews;
      var reviewsReverse = reviews.reverse();
      $scope.gymReviews = reviewsReverse;
    });
  // CREATE A REVIEW
    $scope.createReview = function() {
      console.log($stateParams);
      var review = new Review($scope.newReview);
      console.log("review : ", review);
      review.$save({ gym_id: $stateParams.gym_id }, function(data) {
        console.log("review", data);
        $scope.gym.reviews.unshift(data);
        console.log("new", $scope.gymReviews);
        $scope.newReview = {};
      });
    };

    // DELETE A REVIEW
    $scope.deleteReview = function(review, $index) {
      Review.remove({ id: $stateParams.id, reviewId: review._id }, function(data) {
        $scope.gymReviews.splice($index, 1);
      });
    };
});










// angular.module('crossfitApp').controller('GymSearchCtrl',function($scope) {
//       $scope.searchGym = function () {
//         console.log($scope.term)
//         Post($window.lovation.origin + '/api/gym/search')
//         .success(function (res) {

//         })
//       }
//   });
