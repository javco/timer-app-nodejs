
console.log('Testing routes file');

angular.module('appRoutes', ['ngRoute'])
    .config(function($routeProvider, $locationProvider){
        console.log('testing out routes')
        
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/pages/home.hjs'
            })
            .when('/about', {
                templateUrl: 'app/views/pages/about.hjs'
            })
            
            .otherwise({ redirectTo: '/' });
        
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
        
    });