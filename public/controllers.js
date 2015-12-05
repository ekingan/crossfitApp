/*
 * CONTROLLERS
 */

'use strict';

angular.module('crossfitApp').controller('GymIndexCtrl',function($scope, Gym, $stateParams) {
    

    // get() returns a single book
    

    //query() returns all the gyms
    $scope.allGyms = Gym.query(function(data) {
    }); 


    $scope.editGym = function(gym) {
      Gym.update({id: gym._id}, gym, function(data) {
        gym.editForm = false;
        
      });
    };

    // // delete a gym
    $scope.deleteGym = function (gym, $index) {
      Gym.delete({id: gym._id}, gym, function (data) {
      $scope.gym = gym;
      $scope.allGyms.splice($index, 1);
      });
    };


});
angular.module('crossfitApp').controller('GymNewCtrl',function($scope, Gym, $stateParams) {

    // add a new gym
    $scope.newGym = {};
    $scope.allGyms = [];

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
      Gym.get({ id: $stateParams.gym_id }, function(data) {
      $scope.gym = data;
      });
//creates new review
      $scope.createReview = function() {
        var newReview = $scope.review;
        console.log(newReview);
        Review.save(newReview, function (data) {
        console.log(data);
        $scope.reviews.push(data);

        });
        $scope.review = {};
      };

        // var review = new Review($scope.review);
        // console.log(review);
        // review.$save(function (data) {
        //   $scope.reviews.unshift(data);
        
        //   console.log($scope.reviews);
        //   $scope.review = {};
      //   });
      // };





});

// angular.module('crossfitApp').controller('GymSearchCtrl',function($scope) {
//       $scope.searchGym = function () {
//         console.log($scope.term)
//         Post($window.lovation.origin + '/api/gym/search')
//         .success(function (res) {

//         })
//       }
//   });
