/*
 * ANGULAR APP.JS
 */

'use strict';

angular.module('crossfitApp', ['ui.router',
                               'ngResource'])

 .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('html5Mode', {
        url: "/",
        templateUrl: 'templates/gyms-index.html',
        controller: 'GymIndexCtrl'
      })
      .state('gym-show', {
        url: "/gyms/:gym_id", 
        templateUrl: 'templates/gym-show.html',
        controller: 'GymShowCtrl'
      })
      .state('gym-new', {
        url: "/gyms/gym-new", 
        templateUrl: 'templates/gym-new.html',
        controller: "GymNewCtrl"

      });

    $urlRouterProvider.otherwise("/state1");

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  }]);
