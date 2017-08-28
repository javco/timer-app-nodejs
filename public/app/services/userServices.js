
angular.module('userServices', [])
    .factory('User', function($http){
        userFactory = {};

        //we create a custom function that we can use through all our app
        // User.create(regData);
        userFactory.create = function(regData) {
            return $http.post('/api/users', regData);    
        }

        return userFactory;
    });

    //$http.post('/api/users', this.regData).then(function(data){