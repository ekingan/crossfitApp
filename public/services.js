var app = angular.module('crossfitApp');

app.factory('Gym', function($resource) {
  return $resource('/api/gyms/:id', { gym_id: '@id' },  {
  	update: {
   	 method: 'PUT' // this method issues a PUT request
  	}
  });
});

app.factory('Review', function($resource) {
  return $resource('/api/gyms/:gym_id/reviews/:id', { gym_id: '@gym_id', id: '@id' }, {
  	update: {
   	 method: 'PUT' // this method issues a PUT request
  	}
	});
});

