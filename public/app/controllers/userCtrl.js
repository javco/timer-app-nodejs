

angular.module('userControllers', [])
.controller('regCtrl', function($http){
    
    console.log('testing registration controller');

    this.regUser = function(regData) {
        console.log('form submitted', this.regData);
        $http.post('/api/users', this.regData);
        //router.post('/api/users', function(req, res) {
    }

});